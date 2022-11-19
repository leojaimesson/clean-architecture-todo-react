import { LocalRemoveTodo } from "../../../data/usecases/LocalRemoveTodo";
import { RemoveSessionStorage } from "../../../infra/storage/RemoveSessionStorage";

export function makeLocalRemoveTodoFactory(key: string) {
  return new LocalRemoveTodo(key, new RemoveSessionStorage());
}
