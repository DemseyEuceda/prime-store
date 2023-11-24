import DetallePago from "../componentes/carro/DetallePago";
import ProductoCarro from "../componentes/carro/ProductoCarro";

function Carro() {
  return (
    <div className="flex flex-row">
      <div className="basis-3/4 m-9 bg-slate-100 rounded-md border">
        <div className="ml-2 p-3">
          <h1>Carro</h1>
        </div>
        <div className="flex flex-col items-center">
          <ProductoCarro />
          <ProductoCarro />
          <ProductoCarro />
        </div>
      </div>
      <div className="basis-1/4">
        <DetallePago />
      </div>
    </div>
  );
}

export default Carro;
