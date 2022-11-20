import { RemoveAllTodo } from "../../domain/usecases/RemoveAllTodo";
import { RemoveStorage } from "../protocols/storage/RemoveStorage";

export class LocalRemoveAllTodo implements RemoveAllTodo {
  constructor(
    private readonly key: string,
    private readonly removeStorage: RemoveStorage
  ) {}
  async execute(): Promise<void> {
    await this.removeStorage.execute(this.key);
  }
}
