import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <Link to = "/"><h1>The Book Store</h1></Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add New Book</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;