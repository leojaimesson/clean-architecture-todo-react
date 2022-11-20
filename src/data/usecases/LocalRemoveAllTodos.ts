import { RemoveAllTodos } from "../../domain/usecases/RemoveAllTodos";
import { RemoveStorage } from "../protocols/storage/RemoveStorage";

export class LocalRemoveAllTodos implements RemoveAllTodos {
  constructor(
    private readonly key: string,
    private readonly removeStorage: RemoveStorage
  ) {}
  async execute(): Promise<void> {
    await this.removeStorage.execute(this.key);
  }
}
