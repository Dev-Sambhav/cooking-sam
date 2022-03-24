// import styles
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <nav>
            <Link to="/" className="brand">
                <h1>Cooking Sam</h1>
            </Link>
            <Link to="/create">Create</Link>
        </nav>
    </div>
  )
}

export default Navbar