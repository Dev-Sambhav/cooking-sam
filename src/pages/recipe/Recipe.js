import { useParams, useHistory } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";
import useDocument from "../../hooks/useDocument";
import useFirestore from "../../hooks/useFirestore";

// import styles
import "./Recipe.css";
const Recipe = () => {
  const { mode } = useTheme();
  const { id } = useParams();
  const { data: recipe, error, isLoading } = useDocument("recipes", id);
  const { deleteDocument, updateDocument } = useFirestore("recipes");
  const history = useHistory();

  // todo delete the item
  const handleDelete = () => {
    deleteDocument(id);
    if (recipe) {
      history.push("/");
    }
  };

  // todo update the item
  const handleUpdate = () => {
    const doc = {
      title: "Greek Salad",
    };
    updateDocument(id, doc);
  };

  return (
    <div className={`recipe ${mode}`}>
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
          <button className="del-btn" onClick={handleUpdate}>
            Update
          </button>
        </>
      )}
    </div>
  );
};

export default Recipe;
