import React from "react";
import DetallePago from "../componentes/carro/DetallePago";
import ProductoCarro from "../componentes/carro/ProductoCarro";
import { useSelector } from "react-redux";


function Carro( ) {
  const carro = useSelector((state) => state.carro);

  //console.log(carro.productos)

    return (
    <div className="grid-cols-1 sm:grid-cols-2">
      <div className="basis-3/4 m-9 bg-gray-1 rounded border border-purple-2">
        <div className="ml-2 p-3 bg-gray-1 rounded">
          <h1 className="font-bold text-2xl text-White">Carro</h1>
        </div>
        <div className="grid-cols-2 ">
          {carro.productos.map((producto,index) => (
            <ProductoCarro key={producto.imagenes} producto={producto} index={index} />
          ))}

        </div>
      </div>
      <div className="basis-1/4 border border-purple-2 mx-8 ">
        <DetallePago pago={carro}/>
      </div>
    </div>
  );
}

export default Carro;

// useEffect(()=>{
  //   for(let i in carro.productos){
  //     carro.total = carro.productos[i].cantidad * carro.productos[i].precio;
  //     console.log(carro.total)
  //     console.log(carro.productos[i].cantidad)
  //   }
    
  // }, carro)
