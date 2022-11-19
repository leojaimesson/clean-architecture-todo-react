import { Todo } from "../../domain/models/Todo";
import { RemoveTodo } from "../../domain/usecases/RemoveTodo";
import { RemoveStorage } from "../protocols/storage/RemoveStorage";

export class LocalRemoveTodo implements RemoveTodo {
  constructor(
    private readonly key: string,
    private readonly removeStorage: RemoveStorage
  ) {}
  async execute(todo: Todo): Promise<void> {
    await this.removeStorage.execute([this.key, todo.key]);
  }
}
