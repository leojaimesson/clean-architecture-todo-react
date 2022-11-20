import { Todo } from "../../domain/models/Todo";
import { FinishAllTodo } from "../../domain/usecases/FinishAllTodo";
import { TodoMapper } from "../mappers/TodoMapper";
import { SaveStorage } from "../protocols/storage/SaveStorage";

export class LocalFinishAllTodo implements FinishAllTodo {
  constructor(
    private readonly key: string,
    private readonly saveStorage: SaveStorage<object>
  ) {}

  async execute(todoList: Todo[]): Promise<void> {
    const newTodoList = todoList.map((todo) => {
      todo.done = true;
      return todo;
    });
    await this.saveStorage.execute(this.key, TodoMapper.convertToObject(newTodoList));
  }
}
