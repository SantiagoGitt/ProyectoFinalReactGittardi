import { initializeApp } from "firebase/app"
import { getFirestore, doc, getDoc } from "firebase/firebase";
import ItemDetail from "../ItemListContainer/ItemDetail/ItemDetail";

const firebaseConfig = {
  apiKey: "AIzaSyCo7dtTmuDz2ZpyLRThUrSIk3VVFSwd1q0",
  authDomain: "reactprojecto.firebaseapp.com",
  projectId: "reactprojecto",
  storageBucket: "reactprojecto.appspot.com",
  messagingSenderId: "697360201691",
  appId: "1:697360201691:web:5c568d80b2f15bc6c519fe"
};

const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export async function getItem() {
    let id="0XkCtuCaz1WkKVCvGquS";
    let docReference =doc (DB, "Datos", id);
    let respuesta = await getDoc (docRef);
    let item= respuesta.data()
}