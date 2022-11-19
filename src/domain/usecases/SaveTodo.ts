import { Todo } from "../models/Todo";

export interface SaveTodo {
  execute(todo: Todo): Promise<void>;
}
