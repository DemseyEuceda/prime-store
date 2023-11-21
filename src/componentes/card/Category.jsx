

const CardCategory = ({ product }) => {
  console.log(product);
  return (
    // <div>
    //   <div className="container-category">
    //     <h4 className="title-category"></h4>
    //     <div className="container-image-category">
    //       <img src="" className="image-category"></img>
    //     </div>
    //     <a className="details-product">Ver mas</a>
    //   </div>
    // </div>

    <div key={product.id} className="group relative p-6 border border-red-300">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default CardCategory;
