import { LocalRetrieveAllTodo } from "../../../data/usecases/LocalRetrieveAllTodo";
import { RetrieveSessionStorage } from "../../../infra/storage/RetrieveSessionStorage";

export function makeLocalRetrieveAllTodoFactory(key: string) {
  return new LocalRetrieveAllTodo(key, new RetrieveSessionStorage<object>());
}
