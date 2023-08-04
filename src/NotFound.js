import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1 className="errorHead">ERROR 404 : PAGE NOT FOUND</h1>
            <Link to='/'>Back To Homepage</Link>
        </div>
     );
}
 
export default NotFound;