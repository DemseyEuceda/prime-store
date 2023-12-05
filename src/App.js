// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Category from "./pages/Categorias";
import Carro from "./pages/Carro";
import ListaProductos from "./pages/ListaProductos";
import Producto from "./pages/Producto";
import MetodoPago from "./componentes/card/MetodoPago";
import CrearProducto from "./componentes/card/CrearProducto";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  

  


      //       <Route path="/carro" element={<Carro />}></Route>
      //       <Route
      //         path="/products/:category"
      //         Component={ListaProductos}
      //       ></Route>
      //       <Route path="/product/:id" element={<Producto/>}></Route>
      //     </Routes>
      //   </BrowserRouter>
      // </header>
      // <Footer></Footer>

  return (
    <div>
      {showNavbar && <Navbar></Navbar>}
      <div className="main-content">
        <header className="App-header">
          <BrowserRouter>
            <Routes>
              <Route
                path="/login"
                element={<Login setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />}
              ></Route>
              <Route
                path="/home"
                element={<Category setShowNavbar={setShowNavbar} setShowFooter={setShowFooter}></Category>}
              ></Route>
              <Route
                path="/carro"
                element={<Carro setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />}
              ></Route>
              <Route
                path="/products/:category"
                element={<ListaProductos setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />}
              ></Route>
              <Route
                path="/product/:id"
                element={<Producto setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />} ></Route>
              <Route
                path="/metodopago"
                element={<MetodoPago setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />} ></Route>
                <Route
                path="/crearproducto"
                element={<CrearProducto setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />} ></Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
      {showFooter && <Footer></Footer>}
    </div>
  );
}

export default App;
