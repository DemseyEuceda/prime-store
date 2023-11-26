import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  return (
    <div className="max-w-xs mb-4 mx-auto bg-white rounded-md shadow-md overflow-hidden md:max-w-4xl">
      <Link to={`/product/${product.id}`}>
        <div className="flex bg-gray-1">
          <div className="md:shrink-0 border-r">
            <img
              className="w-80 h-40 object-cover md:h-full md:w-48"
              src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-6 flex flex-col justify-center ">
            <div className="uppercase tracking-wide text-xs text-black font-semibold">
              {product.descripcion}
            </div>
            <p className="block mt-1 text-xs leading-tight text-aqua-1">
              {product.nombre}
            </p>
            <p className="mt-2 text-xs text-slate-500 font-bold">
              {product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardProduct;
