import { TodoPage } from "../../../presentation/pages/TodoPage/TodoPage";
import { makeGenerateUUIDFactory } from "../database/GenerateUUIDFactory";
import { makeLocalSaveTodoFactory } from "../usecases/LocalSaveTodoFactory";
import { makeLocalRemoveTodoFactory } from "../usecases/LocalRemoveTodoFactory";
import { makeLocalRetrieveTodosFactory } from "../usecases/LocalRetrieveTodosFactory";

export function makeTodoPageFactory() {
  return (
    <TodoPage
      saveTodo={makeLocalSaveTodoFactory("todos")}
      retrieveTodos={makeLocalRetrieveTodosFactory("todos")}
      removeTodo={makeLocalRemoveTodoFactory("todos")}
      generateUUID={makeGenerateUUIDFactory()}
    />
  );
}
