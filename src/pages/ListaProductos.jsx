import { useLocation } from "react-router-dom";
import Products from "../componentes/card/Products.jsx";
import { useEffect, useState } from "react";
import { db } from "../firebase-config.js";
import { getDocs, collection } from "firebase/firestore";

const ListaProductos = () => {

  
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [productos, setProductos] = useState([]);


  useEffect(()=>{
    const ref = collection(db, `categorias/${category}/productos`);
    var list = [];
    getDocs(ref).then((res)=>{
      res.docs.forEach((doc)=>{
        list.push(doc.data());        
      })
      setProductos(list);
    })
  
  }, [category])

  //console.log(productos)
  return (
    <div className="border border-purple-2 pr-3 ">
      
      <Products cat={productos} />
    </div>
  );
};

export default ListaProductos;
