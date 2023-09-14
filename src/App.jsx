import "./App.css";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer
        text="productos!"
        className="itemList"
      ></ItemListContainer>
    </div>
  );
}

export default App;
