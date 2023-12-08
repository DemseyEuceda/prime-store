import { useState, useEffect } from "react";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProduct, addFavorite } from "../../redux/carroRedux";

const CardProduct = ({ product }) => {
  const [imagen, setImagen] = useState();
  const [isLiked, setIsLiked] = useState(false); 
  const dispatch = useDispatch();

  useEffect(() => {
    const image = ref(storage, `imagenes/${product.imagenes}`);
    getDownloadURL(image).then((res) => {
      setImagen(res);
    });
  }, []);

  const handleAddClick = () => {
    const cantidad = 1;
    dispatch(addProduct({ ...product, cantidad }));
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if(!isLiked){
      dispatch(addFavorite({...product}))
    }else{

    }

  };

  return (
    <div className="max-w-xs mb-4 mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-4xl md:h-max border border-red">
      <div className="flex bg-gray-1">
        <div className="md:shrink-0 border-r">
          <img
            className="w-80 h-40 object-cover md:h-full md:w-48"
            src={imagen}
            alt="Modern building architecture"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-xs text-black font-semibold">
            {product.descripcion}
          </div>
          <p className="block mt-1 text-xs leading-tight text-aqua-1">
            {product.nombre}
          </p>
          <p className="mt-2 text-xs text-slate-500 font-bold">
            {product.precio}
          </p>
          <div className="mt-2">
            <button
              className={`p-1 bg-aqua-1 rounded-lg text-white ${isLiked ? 'text-red-500' : ''}`}
              onClick={handleAddClick}
            >
              <AiOutlineShoppingCart size={30} />
            </button>
            <button
              className={`ml-1 p-1 bg-aqua-1 text-white rounded-lg`}
              onClick={handleLikeClick}
            >
              {isLiked ? (
                <AiFillHeart size={30} color="red" />
              ) : (
                <AiOutlineHeart size={30} />
              )}
            </button>
            <button className="ml-1 p-1 bg-aqua-1 text-white rounded-lg">
              <AiOutlineSearch size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
