import React, { useState, useEffect } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";

import { useDispatch } from "react-redux";
import { removeAllProduct, removeProduct, addProduct } from "../../redux/carroRedux";
import { FaPlus } from "react-icons/fa";
import { RiSubtractFill } from "react-icons/ri";

function ProductoCarro({producto, index}) {
  const disponible = useState(true);
  const [imagen, setImagen] = useState();
 // const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  /*

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };
*/

  useEffect(() => {
    const image = ref(storage, `imagenes/${producto.imagenes}`);
    getDownloadURL(image).then((res) => {
      setImagen(res);
    });
  }, [producto.imagenes]);

  //console.log(index);

  const handleRemoveClick = () => {
    dispatch(removeAllProduct({...producto}));
  }

  const handleAddClick = () => {
    const cantidad = 1;
    dispatch(addProduct({...producto, cantidad}));
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct({...producto, cantidad: 1}));
  }

  return (
    <div className="flex flex-row p-2  border-t border-black">
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
          <button className="border border-gray-300 px-2 py-1 rounded" onClick={handleRemoveProduct}>
            <RiSubtractFill />
          </button>
          <span className="font-bold">
            {producto.cantidad}
          </span>
          <button className="border border-gray-300 px-2 py-1 rounded" onClick={handleAddClick}>
            <FaPlus />
          </button>
          
          <button onClick={handleRemoveClick}>
          <RiDeleteBin5Line size={32} color=" red" />
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default ProductoCarro;
