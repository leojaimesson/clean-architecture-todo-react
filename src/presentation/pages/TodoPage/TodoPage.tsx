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
import { Title } from "../../components/Title/Title";
import { Input } from "../../components/Input/Input";
import { CheckboxContainer, Container, ItemContainer, ListContainer } from "./TodoPageStyles";
import { Button } from "../../components/Button/Button";
import { Checkbox } from "../../components/Checkbox/Checkbox";

type Props = {
  saveTodo: SaveTodo;
  retrieveTodos: RetrieveTodos;
  removeTodo: RemoveTodo;
  generateUUID: UUIDGenerator;
};

export function TodoPage({
  saveTodo,
  retrieveTodos,
  removeTodo,
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

  async function handleSave(event: KeyboardEvent) {
    if (event.key === "Enter") {
      const todo: Todo = {
        description,
        done: false,
        key: generateUUID.execute(),
        createdAt: new Date(),
      };
      await saveTodo.execute(todo);
      await runRetrieveTodos();
      setDescription("");
    }
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
        onKeyDown={handleSave}
        placeholder="enter a description"
      />
      <ListContainer>
        {todos.map((todo) => (
          <ItemContainer key={todo.key}>
            <CheckboxContainer checked={todo.done}>
              <Checkbox
                checked={todo.done}
                onChange={() => handleMarkAsDone(todo)}
              />
              <span>{todo.description}</span>
            </CheckboxContainer>
            <Button onClick={() => handleRemoveTodo(todo)}>remove</Button>
          </ItemContainer>
        ))}
      </ListContainer>
    </Container>
  );
}
