import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartList from "./componentes/CartList";
import CheckOut from "./componentes/CheckOut";
import ItemDatailContainer from "./componentes/ItemDatailContainer";
import ItemListContainer from "./componentes/ItemListContainer";
import Navbar from "./componentes/Navbar";
import { CartProvider } from "./contexts/Cart";






function App() {

  return (


    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer></ItemListContainer>}></Route>
            <Route path="/item/:id" element={<ItemDatailContainer />}></Route>
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />}></Route>
            <Route path="/CartList" element={<CartList />} />
            <Route path="/finalizarCompra" element={<CheckOut />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
