import { Todo } from "../../domain/models/Todo";
import { RetrieveTodos } from "../../domain/usecases/RetrieveTodos";
import { RetrieveStorage } from "../protocols/storage/RetrieveStorage";

export class LocalRetrieveTodos implements RetrieveTodos {
  constructor(
    private readonly key: string,
    private readonly retrieveStorage: RetrieveStorage<Todo[]>
  ) {}
  execute(): Promise<Todo[]> {
    return this.retrieveStorage.execute(this.key);
  }
}
