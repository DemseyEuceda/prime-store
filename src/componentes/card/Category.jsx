const CardCategory = ({ category }) => {

  console.log(category.nombre);
  return (
    <div
      key={category.id}
      className="group relative p-6 border border-red-300 bg-gray-1 rounded-lg"
    >
      <div className="mb-1">
        <p className="text-black font-bold">{category.nombre}</p>
      </div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          src={category.imageSrc}
          alt={category.imageAlt}
          className="h-full w-full border border-red-400 object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-aqua-1 font-bold">
            <a href={category.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              Ver mas
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;

