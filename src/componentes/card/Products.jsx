import CardProduct from "./Product";

const products = [
  {
    id: 1,
    descripcion:
      "PowerWash Simulator - Nintendo Switch (Game Download Code in Box)",
    nombre: "Nintendo Switch",
    price: "L. 1000.00",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "juegos",
    href: "/product/1"
  },
  {
    id: 2,
    descripcion:
      "PlayStation 5 Console - 2020 PS5 Disc Version - New - Fast Shipping",
    nombre: "PlayStation 5",
    price: "L. 2000.00",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "juegos",
  },
  {
    id: 3,
    descripcion:
      "Samsung Galaxy S21 Ultra 5G 128GB 12GB RAM SM-G998B/DS (FACTORY UNLOCKED) 6.8",
    nombre: "Samsung Galaxy S21 Ultra 5G",
    price: "L. 000.00",
    image:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    category: "telefonos",
  },
];

const Products = ({ cat }) => {
  
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
