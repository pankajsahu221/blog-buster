import React from 'react'
import './Blog.css'
import {Link} from 'react-router-dom';

function Blog({ blog }) {
    const temp_img = 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'

    return (
        <div className="blog">
            <Link to={`/blog/${blog?.id}`} style={{textDecoration: "none", color:"black"}}>
                <img src={blog?.urlToImage || temp_img} className="blog__img" alt="img"/>
                <h4>{blog?.title}</h4>
                <p>{blog?.description}</p>
            </Link>
        </div>
    )
}

export default Blog
