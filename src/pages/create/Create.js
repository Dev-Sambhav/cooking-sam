import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import useFirestore from "../../hooks/useFirestore";

// import styles
import "./Create.css";
const Create = () => {
  const [title, setTitle] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [method, setMethod] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const history = useHistory();
  const {addDocument,data}= useFirestore("recipes")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      title,
      method,
      cookingTime: cookingTime + " minutes",
      ingredients,
    };
    addDocument(doc)
  };

  // redirect to user to home page after submiting data to firestore
  useEffect(() => {
    if (data) {
      history.push("/");
    }
  }, [data, history]);

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredients.trim();
    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIng) => [...prevIng, newIngredients]);
    }
    setNewIngredients("");
    ingredientInput.current.focus();
  };
  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>
        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking Time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
