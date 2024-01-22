import CardProduct from "./Product";

const Products = ({ cat }) => {
  //console.log(cat)
  console.log(cat.product);
  
  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {cat.map((product) => (
          <CardProduct key={product.imagenes} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
