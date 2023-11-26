// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Nabvar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Category from "./pages/Categorias";
import Carro from "./pages/Carro";
import ListaProductos from "./pages/ListaProductos";
import Producto from "./pages/Producto";

function App() {
  return (
    <div className="App">
      <Nabvar></Nabvar>
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login></Login>}></Route>
            <Route path="/home" element={<Category></Category>}></Route>

            <Route path="/carro" element={<Carro />}></Route>
            <Route
              path="/products/:category"
              Component={ListaProductos}
            ></Route>
            <Route path="/product/:id" element={<Producto/>}></Route>
          </Routes>
        </BrowserRouter>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
