import React, { useEffect } from "react";

import Deseos from "../componentes/card/Deseos";
import { useSelector } from "react-redux";

function ListaDeseos( ) {
  const deseo = useSelector((state)=>state.carro);
  console.log(deseo.favoritos)
    return (
    <div className="flex flex-row">
      <div className="basis-3/4 m-9 bg-gray-1 rounded border-slate-300">
        <div className="ml-2 p-3 bg-gray-1 rounded">
          <h1 className="font-bold text-2xl text-White">Favoritos</h1>
        </div>
        <div className="flex flex-col items-center">
         {
          deseo.favoritos.map((fav)=> (
            <Deseos favoritos={fav} key={fav.imagenes} ></Deseos>
          ))
         }
        </div>
      </div>
    </div>
  );
}

export default ListaDeseos;
