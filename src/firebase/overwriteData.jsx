import { updateDoc, doc } from "firebase/firestore"; 
import { db } from "../../firebase.config.js";

async function overwriteData(newContentData){
  try { 
    const docRef = doc(db,"herosection","content")
    await updateDoc(docRef,newContentData);
  } catch (e) {
    console.error("Error adding document: ", e);  
  }
}

export default overwriteData;