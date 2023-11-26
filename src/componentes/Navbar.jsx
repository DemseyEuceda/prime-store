import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BsList as BsListIcon} from "react-icons/bs";
function Navbar() {
  return (
    <div className="flex justify-between items-center p-6 border border-red-400 bg-purple-1">
      <div>
        <img
          src="/logo-prime-store-1.png"
          alt="Logo"
          style={{ width: "50px", height: "auto" }}
        />
      </div>
      <div className="flex">
        <input
          type="text"
          placeholder="Buscar"
          className="border border-gray-300 rounded-l py-2 px-4 outline-none focus:border-blue-500 text-miColorAzul"
        />
        <button className="bg-pink-2 text-white py-3 px-4 rounded-r">
          <FaSearch />
        </button>
      </div>

      <div className="flex">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-1 text-white rounded">
          <AiOutlineHeart size={30} />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-1 text-white rounded">
          <AiOutlineShoppingCart size={30} />
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-1 text-white rounded">
        <BsListIcon size={30} style={{ marginRight: '8px' }} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
