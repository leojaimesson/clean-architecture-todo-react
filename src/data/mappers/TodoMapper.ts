import { Todo } from "../../domain/models/Todo";

type TodoListMap = {
  [key: string]: Todo;
};

export class TodoMapper {
  static convertToObject(todoList: Todo[]): object {
    return todoList.reduce<TodoListMap>((map, todo) => {
      map[todo.key] = todo;
      return map;
    }, {});
  }

  static convertToList(object: object): Todo[] {
    return Object.values(object);
  }
}
