import React, {useEffect, useState} from 'react'
import './Home.css'
import axios from 'axios';
import Blogs from './Blogs';
import SearchTab from './SearchTab';

// const blog_search_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=2c316826de9acde3508f55efe3bbe21a` 
// const blog_url = `https://gnews.io/api/v4/top-headlines?lang=en&token=2c316826de9acde3508f55efe3bbe21a`
const blog_url2 = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=f6aa15d73dbc47dabe1111200f426aa7'
// const blog_url3 = 'https://raddy.co.uk/wp-json/wp/v2/posts/${articleID}';
// const blog_url3 = 'https://raddy.co.uk/wp-json/wp/v2/posts/';


function Home() {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        async function fetchdata(){
            let response = await axios.get(blog_url2);
            
            console.log(response);

            setBlogs(response.data);

            return response;
        }
        fetchdata();
    }, [])

    async function fetchSearchData( searchInput ){

        let response = await axios.get(`https://newsapi.org/v2/everything?q=${searchInput}&sortBy=popularity&apiKey=f6aa15d73dbc47dabe1111200f426aa7`);
            
        console.log(response);

        setBlogs(response.data);

        return response;
    }


    return (
        <div className="home__cont">
          <div className="home">
             <SearchTab fetchSearchData={fetchSearchData}/>
             <Blogs blogs={blogs}/>
          </div>
        </div>
    )
}

export default Home
