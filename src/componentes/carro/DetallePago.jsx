import React from "react";

function DetallePago() {
  return (
    <div className="border p-4 mt-9 mr-9 mb-9  rounded-md">
      
        <div className="flex flex-row justify-center bg-slate-300 p-2 rounded-md">
          <div className="flex flex-col w-3/4">
            <div className="flex flex-row justify-between mb-2">
              <p className="text-gray-600">Subtotal:</p>
              <p className="text-gray-600">$ 35.00</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
              <p className="text-gray-600">Envío:</p>
              <p className="text-gray-600">$ 5.00</p>
            </div>
            <div className="flex flex-row justify-between mb-2">
              <p className="text-gray-600 font-bold">Total:</p>
              <p className="text-gray-600 font-bold">$ 40.00</p>
            </div>
            <div className="flex flex-row justify-center mt-4">
              <button className="bg-aqua-1 hover:bg-aqua-2 text-white rounded-md w-3/4 h-8 focus:outline-none">
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default DetallePago;
