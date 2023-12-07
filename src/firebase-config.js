import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig =  {
    apiKey: "AIzaSyBmRv0bmv62-M9z75ZxHmdMayu97JTpxHA",
    authDomain: "prime-store-4e259.firebaseapp.com",
    databaseURL: "https://prime-store-4e259-default-rtdb.firebaseio.com",
    projectId: "prime-store-4e259",
    storageBucket: "prime-store-4e259.appspot.com",
    messagingSenderId: "167788427098",
    appId: "1:167788427098:web:87a8b9e4c6daa31ac4e563",
    measurementId: "G-21T5V35TYW",
    OAuth : "https://prime-store-4e259.firebaseapp.com/__/auth/handler"
    }

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app)


export function subirImagen (file){  
   
    var name = new Date().getTime().toString();
    const storageRef = ref(storage, `imagenes/${name}`);
    uploadBytes(storageRef, file).then(snapshop =>{
        getDownloadURL(storageRef).then(res =>{
        });
    });
    
    return name;
}