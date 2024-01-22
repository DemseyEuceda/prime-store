import { useState, useEffect } from "react";
import { storage } from "../../firebase-config";
import { getDownloadURL, ref } from "firebase/storage";
import { AiOutlineHeart, AiFillHeart, AiOutlineShoppingCart, AiFillEdit, AiFillDelete  } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addProduct, addFavorite } from "../../redux/carroRedux";

const CardProduct = ({ product }) => {
  const [imagen, setImagen] = useState();
  const [isLiked, setIsLiked] = useState(false); 
  const [showEliminar, setShowEliminar] = useState(false);
  const [showEditar, setShowEditar] = useState(false);
  const dispatch = useDispatch();
  const [rol] = useState(localStorage.getItem("rol"));
 

  useEffect(() => {
    const image = ref(storage, `imagenes/${product.imagenes}`);
    getDownloadURL(image).then((res) => {
      setImagen(res);
    });
  }, [product.imagenes]);

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

  const editar = () =>{
    
  }
  const eliminar = () =>{

  }

  return (
    <div>
    <div className=" group mb-4 ml-4 mr-4 mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-4xl md:h-max border border-purple-2">
      <div className="flex bg-gray-1 h-96 md:h-72 md:w-auto">
        <div className="md:shrink-0 border-r">
          <img
            className="w-80 h-full object-cover md:h-full md:w-52"
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
            
            {rol==="administrador"?(
              <div>
                <button className="ml-1 p-1 bg-aqua-1 text-white rounded-lg" onClick={()=>setShowEliminar(true)} >
                  <AiFillDelete size={30} />
                </button>
                <button className="ml-1 p-1 bg-aqua-1 text-white rounded-lg" onClick={()=>setShowEditar(true)}>
                  <AiFillEdit size={30} />
                </button>

              </div>
            ):("")}
            
          </div>
        </div>
      </div>
    </div>


    {
      showEditar?(
        <div c ></div>
        ):""


     
    }

    {
        showEliminar?(
          <center>
          <div className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
              <div className="relative p-4 w-full max-w-md max-h-full">
                  <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                      <button type="button"  onClick={()=>{setShowEliminar(false)}} className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                          <span className="sr-only">Cerrar</span>
                      </button>
                      <div className="p-4 md:p-5 text-center">
                          <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                          </svg>
                          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">¿Está seguro que desea eliminar este producto?</h3>
                          <button data-modal-hide="popup-modal" type="button" onClick={()=>eliminar()} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                              Si
                          </button>
                          <button data-modal-hide="popup-modal" type="button" onClick={()=>{setShowEliminar(false)}} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancelar</button>
                      </div>
                  </div>
              </div>
          </div>
          </center>
        ):""
    }
    </div>
  );
};

export default CardProduct;
