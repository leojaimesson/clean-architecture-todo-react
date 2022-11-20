import { LocalFinishAllTodo } from "../../../data/usecases/LocalFinishAllTodo";
import { SaveSessionStorage } from "../../../infra/storage/SaveSessionStorage";

export function makeLocalFinishAllTodoFactory(key: string) {
  return new LocalFinishAllTodo(key, new SaveSessionStorage<object>());
}
