import React from "react";
import './BlogCard.css'

function BlogCard(props) {
    return(
        <div className="blog_card_container">
            <div className="bcc_item">
                <h3>{!props.title ? 'Temp Title' : props.title}</h3>
                <h6>{!props.date ? 'Temp Date' : props.date}</h6>
                <p>{!props.blurb ? 'Temp Blurb' : props.blurb}</p>
            </div>
        </div>
    );
}

export default BlogCard;