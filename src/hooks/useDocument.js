import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useDocument = (collectionName, id) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsub = projectFirestore
      .collection(collectionName)
      .doc(id)
      .onSnapshot(
        (doc) => {
          if (doc.exists) {
            setData(doc.data());
            setIsLoading(false);
            setError(null);
          } else {
            setError("No such recipe exists");
            setIsLoading(false);
            setData(null);
          }
        },
        (err) => {
          setError(err.message);
          setIsLoading(false);
          setData(null);
        }
      );
    return () => unsub();
  }, [collectionName, id]);
  return { data, error, isLoading };
};

export default useDocument;
