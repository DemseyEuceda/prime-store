import React from "react";

function CrearProducto() {
  const handleImagenChange = (event) => {
    const file = event.target.files[0];
    // Aquí puedes realizar acciones con el archivo seleccionado, como subirlo a un servidor, mostrar una vista previa, etc.
    console.log("Archivo seleccionado:", file);
  };
  return (
    <div className="flex flex-col justify-center items-center p-10 rounded-lg">
      <div>
        <h1 className="text-black font-bold text-xl">Crear Producto</h1>
      </div>

      <div className="flex flex-col bg-aqua-2 w-100 h-100 space-y-5 space-x-5 p-5 rounded-lg">
        <div className="justify-center items-center flex-col">
          <p className="text-black">Nombre del producto</p>
          <input
            type="text"
            className="border-black rounded w-full h-10 border border-black text-center"
          />
          <div className="flex space-x-4">
            <div>
              <p className="text-black">Categoria</p>
              <div className="mt-1 relative">
                <select
                  id="categoria"
                  name="categoria"
                  className="block w-full h-10 pl-3 pr-10 py-2 text-base border-gray-1 border-black sm:text-sm rounded-md"
                >
                  <option>Elige una categoría</option>
                  <option>Categoría 1</option>
                  <option>Categoría 2</option>
                  <option>Categoría 3</option>
                  {/* Agrega más opciones según tus necesidades */}
                </select>
              </div>
            </div>
          </div>
          <p className="text-black">Precio</p>
          <input
            type="text"
            className="border-black rounded w-full h-10 border border-black text-center"
          />
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <p className="text-black">Descripción</p>
              <textarea
          id="descripcion"
          name="descripcion"
          rows="5" 
          placeholder="Ingresa la descripción del producto..."
          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
        />
            </div>
            <div>
              <p className="text-black">Foto</p>

              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*" // Acepta solo archivos de imagen
                onChange={handleImagenChange}
                className="block w-64 h-10 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className=" flex justify-center items-center space-x-4 p-4">
            <button className="text-white bg-purple-1 h-8 w-32 rounded-md hover:bg-purple-2">
              Crear Producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrearProducto;
