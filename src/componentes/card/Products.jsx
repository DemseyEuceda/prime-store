import CardProduct from "./Product";

const Products = ({ cat }) => {

  console.log(cat.product);
  
  return (
    <div>
      <div>
        {cat.map((product) => (
          <CardProduct key={product.imagenes} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
