import { LocalRemoveAllTodo } from "../../../data/usecases/LocalRemoveAllTodo";
import { RemoveSessionStorage } from "../../../infra/storage/RemoveSessionStorage";

export function makeLocalRemoveAllTodoFactory(key: string) {
  return new LocalRemoveAllTodo(key, new RemoveSessionStorage());
}
