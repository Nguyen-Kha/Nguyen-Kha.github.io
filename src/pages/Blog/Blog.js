import React from "react";
import './Blog.css';
import BlogCard from "../../components/BlogCard/BlogCard";
import { BlogCard1 } from './BlogData.js';
import { Link } from "react-router-dom";

function Blog() {
    return(
        <div className="blog_home">
            <h1>Blog</h1>
            <Link to="/blog/blogpost1">
                <span className="blog_redirect" style={{"display": "block"}}>
                    <BlogCard {...BlogCard1}/>
                </span>
            </Link>
            
            <BlogCard />
        </div>
    );
}

export default Blog;