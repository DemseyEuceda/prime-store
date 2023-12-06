import React, { useEffect } from "react";
//import CardLogin from "../componentes/card/Login";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

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

  const authGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const credencial = GoogleAuthProvider.credentialFromResult(res);
        const token = credencial.accessToken;
        const user = res.user;
        localStorage.setItem("Token", token);
        localStorage.setItem("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const dataError = {
          errorCode: errorCode,
          errorMessage: errorMessage,
          email: email,
        };
        console.log(dataError);
      });
  };

  const authFacebook = () => {
    signInWithPopup(auth, provideF)
      .then((res) => {
        const credencial = FacebookAuthProvider.credentialFromResult(res);
        const token = credencial.accessToken;
        const user = res.user;
        localStorage.setItem("Token", token);
        localStorage.setItem("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const dataError = {
          errorCode: errorCode,
          errorMessage: errorMessage,
          email: email,
        };
        console.log(dataError);
      });
  };

  return (
    <div className="flex min-h-screen ">
      <div className="container-login flex  h-screen justify-center items-center w-1/3 bg-purple-1 ">
        <img
          src="/logo-prime-store-1.png"
          alt="Logo"
          style={{ width: "250px", height: "auto" }}
        />
      </div>

      <div className="flex flex-col justify-center items-center bg-white w-2/3 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Inicia sesión en tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm p-6 bg-gray-1">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  contraseña
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-aqua-1 hover:text-aqua-2">
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-2 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-purple-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Iniciar sesión
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-aqua-1 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-aqua-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={authGoogle}
              >
                Continuar con google
                <FcGoogle className="ml-2" size={20} />
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Login;

// import React, { useEffect } from "react";
// //import CardLogin from "../componentes/card/Login";
// import { FaFacebook} from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { GoogleAuthProvider, getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";

// const provider = new GoogleAuthProvider();
// const provideF = new FacebookAuthProvider();

// function Login({ setShowNavbar, setShowFooter }) {
//   const auth = getAuth();

//   useEffect(() => {
//     setShowNavbar(false);
//     setShowFooter(false);
//     return () => {
//       setShowNavbar(true);
//       setShowFooter(true);
//     };
//   }, [setShowNavbar, setShowFooter]);

//   const authGoogle = () =>{
//     signInWithPopup(auth, provider).then((res)=>{
//       const credencial = GoogleAuthProvider.credentialFromResult(res);
//       const token = credencial.accessToken;
//       const user = res.user;
//       localStorage.setItem('Token', token);
//       localStorage.setItem('user', user)
//     }).catch((error)=>{
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.email;
//         const dataError = {errorCode : errorCode, errorMessage : errorMessage, email : email}
//       console.log(dataError)

//     })

//   }

//   const authFacebook = () =>{
//     signInWithPopup(auth, provideF).then((res)=>{
//       const credencial = FacebookAuthProvider.credentialFromResult(res);
//       const token = credencial.accessToken;
//       const user = res.user;
//       localStorage.setItem('Token', token);
//       localStorage.setItem('user', user)
//     }).catch((error)=>{
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       const email = error.email;
//       const dataError = {errorCode : errorCode, errorMessage : errorMessage, email : email}
//       console.log(dataError)

//     })

//   }

//   return (
//     <div className="flex min-h-screen ">
//       <div className="container-login flex  h-screen justify-center items-center w-1/3 bg-purple-1 h-full">
//         <img
//           src="/logo-prime-store-1.png"
//           alt="Logo"
//           style={{ width: "250px", height: "auto" }}
//         />
//       </div>

//       <div className="flex flex-col justify-center items-center bg-white w-2/3 ">
//         <h1 className="title-login text-black mb-4 font-bold text-1xl">
//           Iniciar Sesión
//         </h1>
//         <div className="bg-gray-200 flex flex-col rounded">
//           <label className="label-input-login text-blue-1">Email:</label>
//           <input type="email" className="border border-black rounded text-blue-1" />

//           <label className="label-input-login text-blue-1">Contraseña</label>
//           <input type="password" className="border border-black rounded" />

//           <button
//             className="sig-in text-white bg-blue-1 rounded mt-4"
//             onClick={() => setShowNavbar(true)}
//           >
//             Iniciar Sesión
//           </button>
//           <button
//             className="bg-aqua-2 text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md p-2"
//             style={{ fontSize: "12px" }}
//             onClick={authFacebook}
//           >
//             <FaFacebook size={20} />
//             <span>Continua con Facebook</span>
//           </button>
//           <button
//             className="bg-aqua-2 text-white py-2 px-4 rounded-md flex items-center gap-2 shadow-md p-2"
//             style={{ fontSize: "12px" }}
//              onClick={authGoogle}
//           >
//             <FcGoogle size={20} />
//             <span>Continua con Facebook</span>
//           </button>

//           <a href="/cambiar-contrasena" className="text-blue-500">
//             ¿Olvidaste tu contraseña?
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
