import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Reon's Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color:"green",
                    backgroundColor:"White",
                    boxShadow: "2px 2px 5px black",
                    borderRadius: "3px"
                }}>New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;