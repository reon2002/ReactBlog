const BlogList = (props) => {
    const blogs= props.blogs;
    const title=props.title;
    const handleDelete=props.handleDelete;

    return ( 
        <div className="blog-list">
            <h2 className="title">{title}</h2>
            {blogs.map( (blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p className='author'>- Written by <i>{blog.author}</i></p>
                    <button className="delete" style={{
                        backgroundColor:"green", 
                        color:"white",
                    }} onClick={()=> handleDelete(blog.id)}>X</button>
                </div>
            )
            )}
        </div>
     );
}
 
export default BlogList;