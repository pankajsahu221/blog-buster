import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './SingleBlog.css';

function SingleBlog({ match }) {

    const articleID = match.params.id;
    const [blog, setBlog] = useState([]);
    
    useEffect(()=>{

        async function fetchData(){
            const response = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}?_embed`);

            console.log("blog detail", response.data);
            setBlog(response.data);
            return response;   
        }

        fetchData();
    },[])

    return (
        <div className="singleblog__cont">
           <div className="singleblog">
                 <h2 className="singleblog__title">{blog?.title?.rendered}</h2>
                 <img src={blog?.thumbnail_url} className="singleblog__img"/>
           </div>
        </div>
    )
}

export default SingleBlog
