import CardCategory from "../componentes/card/Category";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";

import { useEffect, useState } from "react";






export default function Home() {
  const [categorias, setCategorias] = useState([])

  useEffect(()=>{
    const ref = collection(db, "categorias");
    var list = []
    getDocs(ref).then((res)=>{
      res.docs.map((doc)=>{
        list.push(doc.data());        
      })
      setCategorias(list);
    })
  
    
  
  }, [])



  return (
    <div className="bg-white border border-yellow-300">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 border border-green-300">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Categorias
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {categorias.map((categoria) => (
            <CardCategory key={categoria.id} category={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}
