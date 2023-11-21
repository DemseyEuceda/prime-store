const CardLogin = () =>{

return(

    <div className="container-login flex flex-col items-center h-200 w-200 rounded" >
        <h1 className="title-login text-black flex-1" >Iniciar Sesión</h1>
         <div className="bg-gray-200 flex flex-col items-center main-content mt-auto mt-4 mb-4 rounded">
         <label className="label-input-login text-miColorAzul" >Email:</label>
                <input type="e-mail border border-black rounded p-2"/>

                <label className="label-input-login text-miColorAzul" >Contraseña</label>
                <input type="password border border-black rounded p-2"/>
        
                <button className="sig-in text-white bg-miColorAzulOscuro rounded" >Iniciar Sesión</button>

                <button className="create-account text-white bg-miColorVerde rounded "  >Crear cuenta nueva</button> 

         </div>
                      
    </div>

)
}

export default CardLogin;