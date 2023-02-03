import { initializeApp } from "firebase/app";
import {  getFirestore,  doc, getDoc, collection, getDocs, addDoc} from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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

export async function getSingleItem() {
    let id="0XkCtuCaz1WkKVCvGquS";
    let docRef =doc (DB, "Datos", id);
    let docSnapshot = await getDoc(docRef);
    let item = docSnapshot.data();
    item.id = docSnapshot.id;
    
}

export async function getItems() {
  let collectionRef = collection(DB, "Datos");
  let docsSnapshot = await getDocs(collectionRef);
  let docsArray = docsSnapshot.docs;

  let dataDocs = docsArray.map((doc) => {
    let item = doc.data()
    item.id= doc.id;
    return item

  });
  return dataDocs;}

  export async function createBuyOrder(order){
    let collectionRef = collection(DB, "order");
    let newOrder= await addDoc(collectionRef, order )
    return newOrder.id;

  }
