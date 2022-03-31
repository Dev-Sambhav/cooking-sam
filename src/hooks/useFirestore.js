import { useState } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collectionName) => {
  const [data, setData] = useState(null);

  // add a document to firebase
  const addDocument = async (doc) => {
    try {
      const docRef = await projectFirestore.collection(collectionName).add(doc);
      setData(docRef);
    } catch (err) {
      console.log(err.message);
    }
  };

  // delete a document from firebase
  const deleteDocument = async (id) => {
    try {
      await projectFirestore.collection(collectionName).doc(id).delete();
    } catch (err) {
      console.log(err.message);
    }
  };

  // update a document
  const updateDocument = async (id, newDoc) => {
    try {
      await projectFirestore.collection(collectionName).doc(id).update(newDoc);
      console.log("Document successfully updated!");
    } catch (err) {
      console.log("Error updating document: ", err.message);
    }
  };

  return { addDocument, deleteDocument, updateDocument, data };
};

export default useFirestore;
