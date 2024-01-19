
import CardCategory from "../componentes/card/Category";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

import { useEffect, useState } from "react";






export default function Home() {
  const [categorias, setCategorias] = useState([]);



   
  useEffect(()=>{
    
    var agregado = localStorage.getItem("agregado");
    var uid = localStorage.getItem("uid");
    console.log(agregado)
    const userRef = collection(db, 'usuarios');
    var usuario = query(userRef, where("uid", "==", uid ));
    getDocs(usuario).then((users)=>{
      users.forEach((user)=>{
        localStorage.setItem("agregado", true);
        if(agregado){
          localStorage.setItem("rol", user.data().rol)
        }
      })

    });

    

    if(!agregado){
      let dataUser = {correo : localStorage.getItem("correo"), nombre : localStorage.getItem("userName"), uid : localStorage.getItem("uid"), rol : "usuario"};
      addDoc(userRef,dataUser ).then(()=>{
      localStorage.setItem("agregado", true)
      }).catch((error)=>{
        console.log(error)
      })
    }
    

  },[])

  useEffect(()=>{
    const ref = collection(db, "categorias");
    var list = []
    getDocs(ref).then((res)=>{
      res.docs.forEach((doc)=>{
        list.push(doc.data());        
      })
      setCategorias(list);
    })
  
    
  
  }, [])



  return (
    <div className="bg-white border border-yellow-300  " >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8 border border-green-300  ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Categorias
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 ">
          {categorias.map((categoria) => (
            <CardCategory key={categoria.id} category={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}
