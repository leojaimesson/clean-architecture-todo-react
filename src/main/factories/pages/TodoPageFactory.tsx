import { TodoPage } from "../../../presentation/pages/TodoPage/TodoPage";
import { makeGenerateUUIDFactory } from "../database/GenerateUUIDFactory";
import { makeLocalSaveTodoFactory } from "../usecases/LocalSaveTodoFactory";
import { makeLocalRemoveTodoFactory } from "../usecases/LocalRemoveTodoFactory";
import { makeLocalRetrieveAllTodoFactory } from "../usecases/LocalRetrieveAllTodoFactory";
import { makeLocalRemoveAllTodoFactory } from "../usecases/LocalRemoveAllTodoFactory";

export function makeTodoPageFactory() {
  return (
    <TodoPage
      saveTodo={makeLocalSaveTodoFactory("todos")}
      retrieveAllTodo={makeLocalRetrieveAllTodoFactory("todos")}
      removeTodo={makeLocalRemoveTodoFactory("todos")}
      removeAllTodo={makeLocalRemoveAllTodoFactory("todos")}
      generateUUID={makeGenerateUUIDFactory()}
    />
  );
}
