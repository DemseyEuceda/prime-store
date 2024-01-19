import { FaFacebook,   FaInstagram } from "react-icons/fa";

function Footer() {

  return (
    <footer className=" text-center bottom-0 fixed w-full" > 
      <div className="flex justify-center border border-red-300 bg-purple-1 p-5 py-4 px-4">
      <button className="bg-miColorAzul text-white py-53 px-4 " style={{ fontSize: '30px' }}>
      <FaFacebook/>
        </button>
  

        <button className="bg-miColorAzul text-white py-53 px-4 " style={{ fontSize: '30px' }}>
      <  FaInstagram />
        </button>
    </div>
    </footer>
    
  )
}

export default Footer