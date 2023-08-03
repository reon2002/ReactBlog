const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Reon's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"green",
                    backgroundColor:"White",
                    boxShadow: "2px 2px 5px black",
                    borderRadius: "3px"
                }}>New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;