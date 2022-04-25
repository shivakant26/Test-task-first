import React from "react";
import { useNavigate } from "react-router-dom";

const AddArticle = () =>{
    const navigate = useNavigate();
    const Back = () =>{
        navigate("/articlelist");
    }
    return(
        <div className="add_article_page">
            <div className="add-ar_heading">
                <h3>AddArticle Component</h3>
            </div>
            <div className="addarticle">
                <button className="add-btn" onClick={Back}>Back</button>
            </div>
        </div>
    )
}

export default AddArticle;