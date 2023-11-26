import { useLocation } from "react-router-dom";
import Products from "../componentes/card/Products.jsx";

const ListaProductos = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  return (
    <div className="border border-red">
      <h1>{category.toUpperCase()}</h1>
      <Products cat={category} />
    </div>
  );
};

export default ListaProductos;
