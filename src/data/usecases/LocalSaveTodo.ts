import { Todo } from "../../domain/models/Todo";
import { SaveTodo } from "../../domain/usecases/SaveTodo";
import { SaveStorage } from "../protocols/storage/SaveStorage";

export class LocalSaveTodo implements SaveTodo {
  constructor(
    private readonly key: string,
    private readonly saveStorage: SaveStorage<Todo>
  ) {}

  async execute(todo: Todo): Promise<void> {
    await this.saveStorage.execute([this.key, todo.key], todo);
  }
}
