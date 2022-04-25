import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { article_list } from "../Redux/Action/userAction";

const ArticleList = () =>{
const dispatch = useDispatch();
const navigate = useNavigate();
const result = useSelector((state)=>state.userReducer.Article_list.data);


    const add = () =>{
        navigate("/addarticle")
    }
    const callArticle = (index)=>{
        console.log("i am card",index);
        navigate(`/articledetails/${index+1}`);
    }
    const  Logout = () =>{
        localStorage.removeItem("logintoken");
        navigate("/");
    }
    useEffect(()=>{
        dispatch(article_list())
    },[])

    return(
        <div className="card-container"> 
        <div className="listHeader"></div>
            <h1>ArticleList</h1>
            <div className="addarticle">
                <button className="add-btn" onClick={add}>Add Post</button>
            </div>
            <div className="addarticle">
                <a href="/" onClick={Logout}>Logout</a>
            </div>
            <div className="card_Wr">
                <div className="card-inner">
                    {
                        result?.map((item,index)=> 
                    <div className="card" key={index} onClick={()=>callArticle(index)}>
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                    </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}


export default ArticleList;