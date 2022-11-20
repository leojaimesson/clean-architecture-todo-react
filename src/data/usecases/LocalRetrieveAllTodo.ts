import { Todo } from "../../domain/models/Todo";
import { RetrieveAllTodo } from "../../domain/usecases/RetrieveAllTodo";
import { TodoMapper } from "../protocols/mappers/TodoMapper";
import { RetrieveStorage } from "../protocols/storage/RetrieveStorage";

export class LocalRetrieveAllTodo implements RetrieveAllTodo {
  constructor(
    private readonly key: string,
    private readonly retrieveStorage: RetrieveStorage<object>
  ) {}
  async execute(): Promise<Todo[]> {
    const obj = await this.retrieveStorage.execute(this.key);
    return TodoMapper.convertToList(obj);
  }
}
