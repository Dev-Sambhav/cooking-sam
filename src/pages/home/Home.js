import RecipeList from "../../components/RecipeList";
import useCollection from "../../hooks/useCollection";

// import styles
import "./Home.css";
const Home = () => {
  const { data, error, isLoading } = useCollection("recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
