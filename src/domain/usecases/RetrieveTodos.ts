import { Todo } from "../models/Todo";

export interface RetrieveTodos {
  execute(): Promise<Todo[]>;
}