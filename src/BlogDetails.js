import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';


const BlogDetails = () => {
    const { id }= useParams();
    const {data:blog,isPending,error}= useFetch('http://localhost:8000/blogs/'+id);
    const history=useHistory();

    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{
            method:'DELETE',
        }).then(()=>{
            history.push('/');
        })
    };    
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <div className="details">{blog.body}</div>
                    <div className="buttonSection">
                        <button onClick={handleClick} className="delButton">DELETE</button>
                    </div>
                </article>
            )           
            }
        </div>
     );
}
 
export default BlogDetails;