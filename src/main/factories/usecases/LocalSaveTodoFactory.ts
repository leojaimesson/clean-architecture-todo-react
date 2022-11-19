import { LocalSaveTodo } from "../../../data/usecases/LocalSaveTodo";
import { Todo } from "../../../domain/models/Todo";
import { SaveSessionStorage } from "../../../infra/storage/SaveSessionStorage";

export function makeLocalSaveTodoFactory(key: string) {
  return new LocalSaveTodo(key, new SaveSessionStorage<Todo>());
}
