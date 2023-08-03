import {useState} from 'react';
import BlogList from './BlogList';


const Home = () => {
    const [blogs,setBlogs]= useState([
        {title:'My new website', body:'lorem ipsum 123....', author:'Reon Augustine', id:1},
        {title:'Welcome party!', body:'lorem ipsum 123....', author:'Ryan Babu', id:2},
        {title:'Web Dev Top Tips', body:'lorem ipsum 123....', author:'Amal M', id:3},
    ]);

    const handleDeleteClick = (id)=>{
        const newBlogs= blogs.filter(blog=> blog.id!==id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDeleteClick}/>
        </div>
     );
}
 
export default Home;