import { LocalRetrieveTodos } from "../../../data/usecases/LocalRetrieveTodos";
import { Todo } from "../../../domain/models/Todo";
import { RetrieveSessionStorage } from "../../../infra/storage/RetrieveSessionStorage";

export function makeLocalRetrieveTodosFactory(key: string) {
  return new LocalRetrieveTodos(key, new RetrieveSessionStorage<Todo[]>());
}
