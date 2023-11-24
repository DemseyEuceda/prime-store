function DetallePago() {
  return (
    <div className="border p-2 mt-9 mr-9 mb-9 border-red-400">
      <div className="bg-red-50">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col w-3/4">
            <div className="flex flex-row justify-between">
              <p className="text-gray-500">Subtotal</p>
              <p className="text-gray-500">$ 35.00</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-gray-500">Envío</p>
              <p className="text-gray-500">$ 5.00</p>
            </div>
            <div className="flex flex-row justify-between">
              <p className="text-gray-500">Total</p>
              <p className="text-gray-500">$ 40.00</p>
            </div>
            <div className="flex flex-row justify-center">
              <button className="bg-red-500 text-white rounded-md w-3/4 h-10">
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetallePago;
