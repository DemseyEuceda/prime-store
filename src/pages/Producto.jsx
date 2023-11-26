import { useLocation } from "react-router-dom"

const product = {
    id: 1,
    nombre: "Nombre",
    marca : "Marca",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$15",
    image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",}

const Producto = () => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    console.log(id);

  return (
    <div className="flex  items-center justify-center">
        <div className="p-2 flex flex-row border border-red">
            <div className="basis-1/4">
                <img className="" src={product.image} alt={product.nombre} />
            </div>
            <div className="basis-3/4 m-1">
                <h1>{product.nombre}</h1>
                <h2>{product.marca}</h2>
                <p>{product.descripcion}</p>
                <p>{product.price}</p>
                <div>
                    <button className="">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Producto