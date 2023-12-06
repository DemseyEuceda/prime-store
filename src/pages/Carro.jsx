import React from "react";
import DetallePago from "../componentes/carro/DetallePago";
import ProductoCarro from "../componentes/carro/ProductoCarro";
import { useSelector } from "react-redux";

function Carro( ) {

  const carro = useSelector((state) => state.carro);

  console.log(carro)

    return (
    <div className="flex flex-row">
      <div className="basis-3/4 m-9 bg-gray-1 rounded border border-red">
        <div className="ml-2 p-3 bg-gray-1 rounded">
          <h1 className="font-bold text-2xl text-White">Carro</h1>
        </div>
        <div className="flex flex-col items-center">
          {carro.productos.map((producto) => (
            <ProductoCarro key={producto.id} producto={producto} />
          ))}

        </div>
      </div>
      <div className="basis-1/4 border border-red">
        <DetallePago pago={carro}/>
      </div>
    </div>
  );
}

export default Carro;
