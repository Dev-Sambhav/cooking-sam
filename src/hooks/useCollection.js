import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

const useCollection = (collectionName) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const unsub = projectFirestore.collection(collectionName).onSnapshot(
      (snapshot) => {
        if (snapshot.empty) {
          setIsLoading(false);
          setError("No recipes to load");
        } else {
          const results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsLoading(false);
          setError(null);
        }
      },
      (err) => {
        setError(err.message);
        setIsLoading(false);
        setData(null);
      }
    );
    return () => unsub();
  }, [collectionName]);
  return { data, error, isLoading };
};

export default useCollection;
