// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "../src/pages/Login";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Category from "./pages/Categorias";
import Carro from "./pages/Carro";
import ListaProductos from "./pages/ListaProductos";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  

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
            </Routes>
          </BrowserRouter>
        </header>
      </div>
      {showFooter && <Footer></Footer>}
    </div>
  );
}

export default App;
