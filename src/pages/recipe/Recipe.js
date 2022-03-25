import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

// import styles
import "./Recipe.css";
const Recipe = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: recipe,
    isLoading,
    error,
  } = useFetch(`http://localhost:8080/recipes/${id}`);

  const { data, deleteData } = useFetch(
    `http://localhost:8080/recipes/${id}`,
    "DELETE"
  );

  // todo delete the item
  const handleDelete = () => {
    deleteData();
  };

  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data, history]);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button className="del-btn" onClick={handleDelete}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Recipe;
