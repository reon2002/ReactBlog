import {useState} from 'react';

const Create = () => {
    const[title,setTitle]= useState('');
    const[body,setBody]= useState('');
    const[author,setAuthor]= useState('');

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog Title:</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={title}
                onChange={(e)=> setBody(e.target.value)}
                />
                <label>Blog Author:</label>
                <input type="text"
                required
                value={title}
                onChange={(e)=> setBody(e.target.value)}
                />
                <button>Add Blog</button>
                <p>{title}</p>
            </form>
        </div>
     );
}
 
export default Create;