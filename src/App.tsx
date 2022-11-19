import { makeTodoPageFactory } from "./main/factories/pages/TodoPageFactory";
import { GlobalStyle } from "./main/style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      {makeTodoPageFactory()}
    </>
  );
}

export default App;
