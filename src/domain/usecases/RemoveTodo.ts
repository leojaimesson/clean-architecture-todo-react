import { Todo } from "../models/Todo";

export interface RemoveTodo {
  execute(todo: Todo): Promise<void>;
}
