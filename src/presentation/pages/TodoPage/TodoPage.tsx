import {
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import { UUIDGenerator } from "../../../data/protocols/database/UUIDGenerator";
import { Todo } from "../../../domain/models/Todo";
import { SaveTodo } from "../../../domain/usecases/SaveTodo";
import { RemoveTodo } from "../../../domain/usecases/RemoveTodo";
import { RetrieveAllTodo } from "../../../domain/usecases/RetrieveAllTodo";
import { Title } from "../../components/atoms/Title/Title";
import { Input } from "../../components/atoms/Input/Input";
import { ActionsContainer, Container, ListContainer } from "./TodoPageStyles";

import { TodoItem } from "../../components/molecules/TodoItem/TodoItem";
import { Button } from "../../components/atoms/Button/Button";
import { RemoveAllTodo } from "../../../domain/usecases/RemoveAllTodo";
import { FinishAllTodo } from "../../../domain/usecases/FinishAllTodo";

type Props = {
  saveTodo: SaveTodo;
  retrieveAllTodo: RetrieveAllTodo;
  removeTodo: RemoveTodo;
  removeAllTodo: RemoveAllTodo;
  finishAllTodo: FinishAllTodo;
  generateUUID: UUIDGenerator;
};

export function TodoPage({
  saveTodo,
  retrieveAllTodo,
  removeTodo,
  removeAllTodo,
  finishAllTodo,
  generateUUID,
}: Props) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [description, setDescription] = useState<string>("");

  const memoizedRunRetrieveAllTodo = useCallback(runRetrieveAllTodo, [
    retrieveAllTodo,
  ]);

  useEffect(() => {
    memoizedRunRetrieveAllTodo();
  }, [memoizedRunRetrieveAllTodo]);

  async function runRetrieveAllTodo() {
    const todoList = await retrieveAllTodo.execute();
    setTodos(
      todoList.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      )
    );
  }

  function handleChange(event: FormEvent<EventTarget>) {
    const target = event.target as HTMLInputElement;
    setDescription(target.value);
  }

  async function handleRemoveTodo(todo: Todo) {
    await removeTodo.execute(todo);
    await runRetrieveAllTodo();
  }

  async function handleRemoveAllTodo() {
    await removeAllTodo.execute();
    await runRetrieveAllTodo();
  }

  async function handleFinishAllTodo() {
    await finishAllTodo.execute(todos);
    await runRetrieveAllTodo();
  }

  async function handleEnterInput(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const todo: Todo = {
        description,
        done: false,
        key: generateUUID.execute(),
        createdAt: new Date(),
      };
      await handleSaveTodo(todo);
      setDescription("");
    }
  }

  async function handleSaveTodo(todo: Todo) {
    await saveTodo.execute(todo);
    await runRetrieveAllTodo();
  }

  async function handleMarkAsDone(todo: Todo) {
    todo.done = !todo.done;
    await saveTodo.execute(todo);
    await runRetrieveAllTodo();
  }

  return (
    <Container>
      <Title>clean architecture todo app</Title>
      <Input
        type="text"
        value={description}
        onChange={handleChange}
        onKeyDown={handleEnterInput}
        placeholder="enter a description"
      />
      <ListContainer>
        <ActionsContainer>
          <Button onClick={handleRemoveAllTodo}>Remove All</Button>
          <Button
            background="var(--color-emerald-green)"
            onClick={handleFinishAllTodo}
          >
            Finish All
          </Button>
        </ActionsContainer>
        {todos.map((todo) => (
          <TodoItem
            key={todo.key}
            todo={todo}
            onChangeCheckbox={handleMarkAsDone}
            onClickDeleteButton={handleRemoveTodo}
            onClickSaveButton={handleSaveTodo}
          />
        ))}
      </ListContainer>
    </Container>
  );
}
