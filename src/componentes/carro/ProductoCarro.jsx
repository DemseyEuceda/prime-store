import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";

function ProductoCarro({producto}) {
  const [disponible, setDisponible] = useState(true);
  const [imagen, setImagen] = useState();
  

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  console.log(producto.cantidad)


  useEffect(() => {
    const image = ref(storage, `imagenes/${producto.imagenes}`);
    getDownloadURL(image).then((res) => {
      setImagen(res);
      console.log(imagen);
    });
  }, []);

  return (
    <div className="flex flex-row p-2  rounded">
      <div className="basis-1/4 bg-gray-1">
        <img
          src={imagen}
          alt={imagen}
        />
      </div>
      <div className="basis-3/4 p-2 flex flex-col items-center justify-center bg-gray-1 border-slate-300 rounded">
        <p className="font-bold">{producto.nombre}</p>
        <p className="font-bold">{producto.precio}</p>
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
            value={producto.cantidad}
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
