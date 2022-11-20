import { Todo } from "../../domain/models/Todo";
import { RetrieveAllTodo } from "../../domain/usecases/RetrieveAllTodo";
import { RetrieveStorage } from "../protocols/storage/RetrieveStorage";

export class LocalRetrieveTodos implements RetrieveAllTodo {
  constructor(
    private readonly key: string,
    private readonly retrieveStorage: RetrieveStorage<Todo[]>
  ) {}
  execute(): Promise<Todo[]> {
    return this.retrieveStorage.execute(this.key);
  }
}
