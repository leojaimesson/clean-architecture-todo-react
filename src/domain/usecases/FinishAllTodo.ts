import { Todo } from "../models/Todo";

export interface FinishAllTodo {
  execute(todoList: Todo[]): Promise<void>;
}
