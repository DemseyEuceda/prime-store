import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsList as BsListIcon } from "react-icons/bs";
import { useSelector } from "react-redux";
function Navbar() {
  const cantidad = useSelector((state) => state.carro.cantidad);
  const [open, setOpen] = useState(false);
  const [imagen, setImagen] = useState('');
  const [userName, setUserName] = useState('');
  const [token, setToken] = useState('');
  const [rol, setRol] = useState('');

  useEffect(()=>{
    setImagen(window.localStorage.getItem("userphoto"));
    setUserName(window.localStorage.getItem("userName"));
    setToken(window.localStorage.getItem("Token"))
    setRol(window.localStorage.getItem("rol"))
    //console.log(imagen, userName);
  },[])

  const borrarLocalStorage =()=>{
    window.localStorage.clear();
  }
  

  return (
    <div className="flex justify-between items-center p-6 border border-red-400 bg-purple-1 w-full">
      <div className="mr-4 ">
        <a href="/home">
        <img
          src="/logo-prime-store-1.png"
          alt="Logo"
          style={{ width: "50px", height: "auto" }}
          
        />
        </a>
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Buscar"
          className="pl-1 border border-gray-300 rounded-l py-2 px-4 outline-none focus:border-blue-500 text-miColorAzul smax:w-7 "
        />
        <button className="bg-pink-2 text-white py-3 px-4 rounded-r ">
          <FaSearch />
        </button>
      </div>

      <div className="flex">
        <a  href="/deseos"  className=" hidden sm:flex items-center gap-2 px-4 py-2 bg-purple-1 text-white rounded ">
          <AiOutlineHeart size={30} />
        </a>
        <a href="/carro" className=" hidden  sm:flex items-center gap-2 px-4 py-2 bg-purple-1 text-white rounded relative">
          {
            cantidad > 0 && (
              <span className="absolute top-0 right-0 bg-white text-black rounded-full h-6 w-6 flex items-center justify-center">
                {cantidad > 9 ? "9+" : cantidad}
              </span>
            )
            }
          <AiOutlineShoppingCart size={30} />
        </a>

        <button onClick={() => setOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-purple-1 text-white rounded"  >
          <BsListIcon size={30} style={{ marginRight: "8px" }} />
        </button>
      </div>


    

      <div className={`${!open && "hidden"} bg-gray-600/50 min-h-screen fixed top-0 left-0 right-0 backdrop-blur-sm `} onClick={() => setOpen(false)}></div>

      <div className={`${open ? "w-52 sm:w-80 " : "w-0"}  bg-blue-1 min-h-screen fixed top-0 right-0 transition-all duration-300 z-10 h-full`}>
        <div className={`${!open && "hidden"} pt-3`}>
          <button className='ml-4 text-white mb-14' onClick={() => setOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2 '>
          <p  className="flex items-center ps-2.5 mb-5">
            <img src={imagen} className="h-6 me-3 sm:h-7" alt="imagen no encontrada" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{userName}</span>
          </p>
          </div>
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
            <a href="/home">Inicio</a>
          </div>
          
            {rol=== "administrador" ?(
            <div>
                <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
                  <a href="/crearproducto">Agregar Producto</a>
                </div>
                <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
                  <a href="/editarproducto">Editar Productos</a>
                </div>
                <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
                  <a href="/allproducts">Todos los productos</a>
                </div>
                <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
                  <a href="/administracion">Administración</a>
                </div>

            </div>
          ):("") }
            

         
          
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
            <a href="/deseos">Lista de favoritos</a>
          </div>
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
            <a href="/carro">Carrito de compras</a>
          </div>
          <div className='text-center text-white text-xl hover:bg-orange-400 cursor-pointer py-3 mb-2'>
            {
              token ? (<a href="/login" onClick={borrarLocalStorage}>Cerrar Sesión</a>):(<a href="/login" >Iniciar Sesión</a>)
            }
            <a href="/login">

            </a>
          </div>
        </div>
      </div>
   




      
    </div>
  );
}

export default Navbar;