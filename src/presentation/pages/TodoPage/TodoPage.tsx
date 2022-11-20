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
import { RetrieveTodos } from "../../../domain/usecases/RetrieveTodos";
import { Title } from "../../components/atoms/Title/Title";
import { Input } from "../../components/atoms/Input/Input";
import { ActionsContainer, Container, ListContainer } from "./TodoPageStyles";

import { TodoItem } from "../../components/molecules/TodoItem/TodoItem";
import { Button } from "../../components/atoms/Button/Button";
import { RemoveAllTodos } from "../../../domain/usecases/RemoveAllTodos";

type Props = {
  saveTodo: SaveTodo;
  retrieveTodos: RetrieveTodos;
  removeTodo: RemoveTodo;
  removeAllTodos: RemoveAllTodos;
  generateUUID: UUIDGenerator;
};

export function TodoPage({
  saveTodo,
  retrieveTodos,
  removeTodo,
  removeAllTodos,
  generateUUID,
}: Props) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [description, setDescription] = useState<string>("");

  const memoizedRunRetrieveTodos = useCallback(runRetrieveTodos, [
    retrieveTodos,
  ]);

  useEffect(() => {
    memoizedRunRetrieveTodos();
  }, [memoizedRunRetrieveTodos]);

  async function runRetrieveTodos() {
    const todos = Object.values(await retrieveTodos.execute());
    setTodos(
      todos.sort(
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
    await runRetrieveTodos();
  }

  async function handleRemoveAllTodos() {
    await removeAllTodos.execute();
    await runRetrieveTodos();
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
    await runRetrieveTodos();
  }

  async function handleMarkAsDone(todo: Todo) {
    todo.done = !todo.done;
    await saveTodo.execute(todo);
    await runRetrieveTodos();
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
          <Button onClick={handleRemoveAllTodos}>Remove All</Button>
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
