// App.js
import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
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
import ListaDeseos from "./pages/ListaDeseos";
import TodosProductos from "./pages/TodosProductos";
import EditarProducto from "./componentes/card/editarProducto";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  onAuthStateChanged(auth, async (user)=>{
    //console.log(user)
  })



  
  return (
    <div className="w-full h-full ">
      {showNavbar && <Navbar></Navbar>}
      <div className="main-content w-full h-full scroll-auto ">
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
                path="/"
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
                <Route
                path="/deseos"
                element={<ListaDeseos setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />} ></Route>
                <Route
                path="/allproducts"
                element={<TodosProductos setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />} ></Route>
                <Route
                path="/editarproducto"
                element={<EditarProducto setShowNavbar={setShowNavbar} setShowFooter={setShowFooter} />} ></Route>
            </Routes>
          </BrowserRouter>
        </header>
      </div>
      {showFooter && <Footer></Footer>}
    </div>
  );
}

export default App;
