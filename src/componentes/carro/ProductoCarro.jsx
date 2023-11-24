function ProductoCarro() {
  return (
    <div className="flex flex-row p-2 border-t-2 border-slate-300">
        <div className="basis-1/4">
            <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Imagen del producto" />
        </div>
        <div className="basis-3/4 p-2 flex flex-col items-center justify-center ">
            <p>Nombre del producto</p>
            <p>Color</p>
            <p>Talla</p>
            <p>Cantidad</p>
            <p>Precio</p>
        </div>
    </div>
  )
}

export default ProductoCarro