import { LocalRemoveAllTodos } from "../../../data/usecases/LocalRemoveAllTodos";
import { RemoveSessionStorage } from "../../../infra/storage/RemoveSessionStorage";

export function makeLocalRemoveAllTodosFactory(key: string) {
  return new LocalRemoveAllTodos(key, new RemoveSessionStorage());
}
