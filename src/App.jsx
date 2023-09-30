import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartList from "./componentes/CartList";
import ItemDatailContainer from "./componentes/ItemDatailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";




function App() {
  return (<BrowserRouter>
    <div className="App">
      <Navbar></Navbar>




      <Routes>
        <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
        <Route path="/item/:id" element={<ItemDatailContainer />}></Route>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />}></Route>
        <Route path="/CartList" element={<CartList />} />
      </Routes>








    </div>
  </BrowserRouter>

  );
}

export default App;
