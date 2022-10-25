
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {v4} from 'uuid';
const firebaseConfig = {
    apiKey: "AIzaSyAWJKvE7guZRflXJOyotBlp5_g1yxoSTss",
    authDomain: "ecitransport.firebaseapp.com",
    projectId: "ecitransport",
    storageBucket: "ecitransport.appspot.com",
    messagingSenderId: "336071620884",
    appId: "1:336071620884:web:a00d9b835a408dc5e8aa01",
    measurementId: "G-7FCZ19DBZ2"
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)

export async function uploadFile(file) {
    try {
        const storageRef = ref(storage, `/imagenes/${v4()}`);
        await uploadBytes(storageRef, file);
        const urlImage = await getDownloadURL(storageRef);
        return urlImage;
    }catch (e){
        console.log(e)
    }
}