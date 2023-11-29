import React from "react";

function MetodoPago() {
  return (
    <div className="flex justify-center p-10 rounded">
      <div className="flex flex-col bg-aqua-2 w-100 h-100 space-y-5 space-x-5 p-10 rounded">
        <div className="flex justify-center space-x-4">
          <div className="flex flex-col space-x-4">
            <h2 className="text-black font-semibold text-center">
              Tarjetas de crédito
            </h2>
            <div className="flex space-x-4 justify-center items-center">
              <img src="visa.png" alt="Logo" className="w-20 h-auto" />
              <img src="mastercard.png" alt="Logo" className="w-14 h-auto" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-black font-semibold text-center">
              Tarjetas de débito
            </p>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <img
                  src="bancoatlantida.png"
                  alt="Logo"
                  className="w-8 h-auto"
                />
                <img
                  src="bancooccidente.jpg"
                  alt="Logo"
                  className="w-8 h-auto"
                />
                <img src="bancoazteca.png" alt="Logo" className="w-8 h-auto" />
              </div>
              <div className="flex space-x-4">
                <img src="bac.png" alt="Logo" className="w-8 h-auto" />
                <img src="promerica.png" alt="Logo" className="w-8 h-auto" />
                <img src="lafise.jpg" alt="Logo" className="w-8 h-auto" />
              </div>
            </div>
          </div>
        </div>

        <div className="justify-center items-center flex-col">
          <p className="text-black">Numero de Tarjeta</p>
          <input
            type="text"
            className="border-black rounded w-64 h-8 border border-black text-center"
          />
          <div className="flex space-x-4">
            <div className="space-x-4">
              <p className="text-black">Fecha de expiración</p>
              <input
                type="text"
                className="border-black rounded w-14 h-8 border border-black text-center space-x-4"
                placeholder="MES"
              />
              <input
                type="text"
                className="border-black rounded w-14 h-8 border border-black text-center space-x-4"
                placeholder="AÑO"
              />
            </div>
            <div className="space-x-4">
              <p className="text-black">Código de seguridad</p>
              <div className="space-x-4 flex">
                <input
                  type="text"
                  className="border-black rounded w-14 h-8 border border-black text-center"
                  placeholder="XXX"
                />
                <img src="cvv.png" alt="Logo" className="w-10 h-auto" />
              </div>
            </div>
          </div>
          <p className="text-black">Nombre del titular</p>
          <input
            type="text"
            className="border-black rounded w-64 h-8 border border-black text-center"
          />
          <p className="text-black">Correo electronico</p>
          <input
            type="email"
            className="border-black rounded w-64 h-8 border border-black text-center"
          />
          <div className=" flex justify-center items-center space-x-4 p-4">
          <button className="text-white bg-purple-1 h-8 w-32 rounded-md hover:bg-purple-2">
          Aceptar
        </button>

          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default MetodoPago;
