import React from "react";

const CardLogin = ({ setShowNavbar }) => {
  return (
    <div className="flex h-screen ">
      <div className=" flex h-screen w-full bg-gray-500 h-full">
            
      </div>
      <div className="container-login flex h-screen justify-center items-center rounded w-full bg-gray h-full p-10">
        <h1 className="title-login text-black flex-1">Iniciar Sesión</h1>
        <div className="bg-gray-200 flex flex-col items-center main-content mt-auto mt-4 mb-4 rounded">
          <label className="label-input-login text-miColorAzul">Email:</label>
          <input type="email" className="border border-black rounded p-2" />

          <label className="label-input-login text-miColorAzul">
            Contraseña
          </label>
          <input type="password" className="border border-black rounded p-2" />

          <button
            className="sig-in text-white bg-miColorAzulOscuro rounded"
            onClick={() => setShowNavbar(true)}
          >
            Iniciar Sesión
          </button>

          <button className="create-account text-white bg-miColorVerde rounded">
            Crear cuenta nueva
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardLogin;
