import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { article_Details } from "../Redux/Action/userAction";

const ArticleDetails = () =>{
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const data = useSelector((state)=>state.userReducer.Article_Details.data)


    const Back = () =>{
        navigate("/articlelist");
    }


    useEffect(()=>{
        dispatch(article_Details(id))
    },[id])
    
    return(
        <div className="card-container"> 
            <h1>ArticleDetails</h1>
            <div className="addarticle">
                <button className="add-btn" onClick={Back}>Back</button>
            </div>
            <div className="card_Wr">
                <div className="card-inner"> 
                    <div className="card">
                        <h4>{data?.title}</h4>
                        <p>{data?.body}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ArticleDetails;