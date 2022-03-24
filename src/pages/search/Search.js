import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// import styles
import "./Search.css";
import RecipeList from "../../components/RecipeList"
const Search = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const q = queryParams.get("q");
  const url = "http://localhost:8080/recipes?q=" + q;
  const { data, error, isLoading } = useFetch(url);

  return(
    <div>
      <h2 className="page-title">Recipes including "{q}"</h2>
      {error &&<p className="error">{error}</p> }
      {isLoading && <p className="loading">Loading...</p> }
      {data && <RecipeList recipes={data}/>}
    </div>
  )
};

export default Search;
