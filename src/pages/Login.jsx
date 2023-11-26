import React, { useEffect } from "react";
import { FaFacebook} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import CardLogin from "../componentes/card/Login";

function Login({ setShowNavbar, setShowFooter }) {
  useEffect(() => {
    setShowNavbar(false);
    setShowFooter(false);
    return () => {
      setShowNavbar(true);
      setShowFooter(true);
    };
  }, [setShowNavbar, setShowFooter]);

  return (
    <div className="flex min-h-screen ">
      <div className="container-login flex  h-screen justify-center items-center w-1/3 bg-purple-1 h-full">
        <img
          src="/logo-prime-store-1.png"
          alt="Logo"
          style={{ width: "250px", height: "auto" }}
        />
      </div>

      <div className="flex flex-col justify-center items-center bg-white w-2/3 ">
        <h1 className="title-login text-black mb-4 font-bold text-1xl">
          Iniciar Sesión
        </h1>
        <div className="bg-gray-200 flex flex-col rounded">
          <label className="label-input-login text-blue-1">Email:</label>
          <input type="email" className="border border-black rounded text-blue-1" />

          <label className="label-input-login text-blue-1">Contraseña</label>
          <input type="password" className="border border-black rounded" />

          <button
            className="sig-in text-white bg-blue-1 rounded mt-4"
            onClick={() => setShowNavbar(true)}
          >
            Iniciar Sesión
          </button>
          <button
            className="bg-aqua-2 text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md p-2"
            style={{ fontSize: "12px" }}
          >
            <FaFacebook size={20} />
            <span>Continua con Facebook</span>
          </button>
          <button
            className="bg-aqua-2 text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md p-2"
            style={{ fontSize: "12px" }}
          >
            <FcGoogle size={20} />
            <span>Continua con Facebook</span>
          </button>

          <a href="/cambiar-contrasena" className="text-blue-500">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
