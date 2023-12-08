import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";


function Deseos({favoritos}) {
  const [disponible, setDisponible] = useState(true);

  const [quantity, setQuantity] = useState(1);
  var [imagen, setImagen] = useState();



  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  useEffect(()=>{
    const image = ref(storage, `imagenes/${favoritos.imagenes}`);
    getDownloadURL(image).then((res) => {
      setImagen(res);
    });

  })
  return (
    <div className="flex flex-row p-2  rounded">
      <div className="basis-1/4 bg-gray-1 border-slate-300">
        <img
          src={imagen}
          alt="Imagen del producto"
        />
      </div>
      <div className="basis-3/4 p-2 flex flex-col items-center justify-center bg-gray-1 border-slate-300 rounded">
        <p className="font-bold">{favoritos.nombre}</p>
        <p className="font-bold">{favoritos.precio}</p>
        {/* Estado de disponibilidad */}
        {disponible ? (
          <p className="text-aqua-2 font-semibold">Disponible</p>
        ) : (
          <p className="text-red-600 font-semibold">No Disponible</p>
        )}
   
        <div className="flex items-center space-x-2">
       
     
          <button>
            <FaHeart size={32} color=" red" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Deseos;
