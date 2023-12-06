import React, { useEffect } from "react";
//import CardLogin from "../componentes/card/Login";
import { FaFacebook} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";




const provider = new GoogleAuthProvider();
const provideF = new FacebookAuthProvider();

function Login({ setShowNavbar, setShowFooter }) {
  const auth = getAuth();

  useEffect(() => {
    setShowNavbar(false);
    setShowFooter(false);
    return () => {
      setShowNavbar(true);
      setShowFooter(true);
    };
  }, [setShowNavbar, setShowFooter]);



  const authGoogle = () =>{
    signInWithPopup(auth, provider).then((res)=>{
      const credencial = GoogleAuthProvider.credentialFromResult(res);
      const token = credencial.accessToken;
      const user = res.user;
      console.log(user)
      localStorage.setItem('Token', token);
      localStorage.setItem('userName', user.displayName);
      localStorage.setItem('userphoto', user.photoURL);
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const dataError = {errorCode : errorCode, errorMessage : errorMessage, email : email}
      console.log(dataError)


    })

  }

  const authFacebook = () =>{
    signInWithPopup(auth, provideF).then((res)=>{
      const credencial = FacebookAuthProvider.credentialFromResult(res);
      const token = credencial.accessToken;
      const user = res.user;
      localStorage.setItem('Token', token);
      localStorage.setItem('user', user)
    }).catch((error)=>{
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const dataError = {errorCode : errorCode, errorMessage : errorMessage, email : email}
      console.log(dataError)

    })

  }

  return (
    <div className="flex min-h-screen ">
      <div className="container-login flex  h-screen justify-center items-center w-1/3 bg-purple-1 h-full">
        <img
          src="/logo-prime-store-1.png"
          alt="Logo"
          style={{ width: "250px", height: "auto" }}
        />
      </div>

      <div className="flex flex-col justify-center items-center bg-white w-2/3 ">
        <h1 className="title-login text-black mb-4 font-bold text-1xl">
          Iniciar Sesión
        </h1>
        <div className="bg-gray-200 flex flex-col rounded">

          <button
            className="bg-aqua-2 text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md p-2"
            style={{ fontSize: "12px" }}
            onClick={authFacebook}
          >
            <FaFacebook size={20} />
            <span>Continua con Facebook</span>
          </button>
          <button
            className="bg-aqua-2 text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md p-2"
            style={{ fontSize: "12px" }}
             onClick={authGoogle}
          >
            <FcGoogle size={20} />
            <span>Continua con Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
