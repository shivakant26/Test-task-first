import { ARTICLE_DETAILS, ARTICLE_LIST } from "../actionType"

const initialState = {
    Article_list:[],
    Article_Details:[],
}


const userReducer = (state=initialState,action) =>{
    console.log("action",action)
    switch(action.type){
            case ARTICLE_LIST:
                return{
                    ...state,
                    Article_list:action.payload
                }
                break;
                case ARTICLE_DETAILS:
                return{
                    ...state,
                    Article_Details:action.payload
                }
                break;
            default:
                return state
    }
}


export default userReducer;