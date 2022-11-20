import { Todo } from "../models/Todo";

export interface RetrieveAllTodo {
  execute(): Promise<Todo[]>;
}