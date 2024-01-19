import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
import Products from "../componentes/card/Products";


const TodosProductos = () =>{
    //const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    



    useEffect(()=>{
        const ref = collection(db, "categorias");
        var list = []
        getDocs(ref).then((res)=>{
        res.docs.forEach((doc)=>{
            let ref1 = collection(db, `categorias/${doc.data().nombre}/productos`);
            getDocs(ref1).then((items)=>{
                items.forEach((item)=>{
                    list.push(item.data());
                })  
            })          
        })
        });
        setProductos(list)
        

    }, [])

    return(
    <div>
        <div className="border border-purple-2  ">
        {console.log(productos)}
        <Products cat={productos} />
    </div>

    </div>)
}
export default TodosProductos;