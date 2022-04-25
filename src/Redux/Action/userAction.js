import { ARTICLE_DETAILS, ARTICLE_LIST  } from "../actionType";
import axios from "axios";
export const article_list = () =>{
    return (dispatch) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                dispatch({
                    type:ARTICLE_LIST,
                    payload: data
                })
            })
    };
}
export const article_Details = (id) =>{
    return (dispatch) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id+1}`)
            .then(data => {
                dispatch({
                    type:ARTICLE_DETAILS,
                    payload: data
                })
            })
    };
}