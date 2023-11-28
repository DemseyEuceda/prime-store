import React, { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
function ProductoCarro() {
  const [disponible, setDisponible] = useState(true);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  return (
    <div className="flex flex-row p-2  rounded">
      <div className="basis-1/4 bg-slate-200">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          alt="Imagen del producto"
        />
      </div>
      <div className="basis-3/4 p-2 flex flex-col items-center justify-center bg-slate-200 border-slate-300 rounded">
        <p className="font-bold">Nombre del producto</p>
        <p className="font-bold">Precio</p>
        {/* Estado de disponibilidad */}
        {disponible ? (
          <p className="text-aqua-2 font-semibold">Disponible</p>
        ) : (
          <p className="text-red-600 font-semibold">No Disponible</p>
        )}
        <p>Color</p>
        <p>Talla</p>
        <div className="flex items-center space-x-2">
          <label htmlFor="quantitySelect" className="text-black">
            Cantidad:
          </label>
          <select
            id="quantitySelect"
            value={quantity}
            onChange={handleQuantityChange}
            className="border rounded-md px-2 py-1 focus:outline-none focus:border-slate-300 bg-aqua-2"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
          <button>
          <RiDeleteBin5Line size={32} color=" red" />
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default ProductoCarro;
