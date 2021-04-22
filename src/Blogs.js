import React from 'react'
import Blog from './Blog';
import { v4 as uuidv4 } from 'uuid';

function Blogs({ blogs }) {
    return (
        <div className="blogs">
            {blogs?.articles?.map( blog => {
                 return <Blog blog={blog} key={uuidv4()}/>
             })}

             {/* {blogs.articles.size < 1 && <h4 style={{textAlign: "center"}}>No blogs for the input</h4>} */}

        </div>
    )
}

export default Blogs
