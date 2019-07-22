import produce from "immer";
import {GET_BRANDS, GET_BRANDS_SUCCESS, GET_BRANDS_FAILURE, GET_CHOCOLATES,
     GET_CHOCOLATES_SUCCESS, GET_CHOCOLATES_FAILURE, CHANGE_INPUT } from "../actionTypes/posts";
import {
    GET_CHOCOLATES_BY_ID,
    GET_CHOCOLATES_BY_ID_SUCCESS,
    GET_CHOCOLATES_BY_ID_FAILURE,
    GET_BRANDS_BY_ID,
    GET_BRANDS_BY_ID_SUCCESS,
    GET_BRANDS_BY_ID_FAILURE,
    SEARCH_CHOCOLATE,
    SEARCH_CHOCOLATE_SUCCESS,
    SEARCH_CHOCOLATE_FAILURE
} from "../actionTypes/posts.js"
export default function postsReducer(prevState = { 
    chocolates : [],
    brands : [],
    id_chocolate : [],
    id_brands :[],
    search : [], 
    searchChocolate:[], 
    isLoading:false},action){
    return produce(prevState, draft =>{
        switch(action.type){
            case GET_CHOCOLATES:
                draft.isLoading = true;
                break;
            case GET_CHOCOLATES_SUCCESS:
                    draft.chocolates = action.chocolates;
                    draft.isLoading = false;
                    break;
            case GET_CHOCOLATES_FAILURE:
                    draft.error = action.error;
                    draft.isLoading = false;
                    break;
            case GET_BRANDS :
                draft.isLoading = true;
                break;
            case GET_BRANDS_SUCCESS :
                draft.brands = action.brands;
                draft.isLoading = false;
                break;
            case GET_BRANDS_FAILURE :
                draft.error = action.error;
                draft.isLoading = false;
                break;
            case GET_CHOCOLATES_BY_ID :
                draft.isLoading = true;
                break;
            case GET_CHOCOLATES_BY_ID_SUCCESS :
                draft.id_chocolate = action.id_chocolate;
                draft.isLoading = false;
                break;
            case GET_CHOCOLATES_BY_ID_FAILURE :
                draft.error = action.error;
                break;
            case GET_BRANDS_BY_ID :
                draft.isLoading = true;
                break;
            case GET_BRANDS_BY_ID_SUCCESS :
                draft.id_brands = action.id_brands;
                draft.isLoading = false;
                break;
            case GET_BRANDS_BY_ID_FAILURE :
                draft.error = action.error;
                draft.isLoading = false;
                break;
            case SEARCH_CHOCOLATE :
                draft.isLoading = true;
                break;
            case SEARCH_CHOCOLATE_SUCCESS :
                console.log(action.search_Success)
                draft.searchChocolate = action.search_Success;
                break;
            case SEARCH_CHOCOLATE_FAILURE :
                draft.error = action.error;
                break;
                case CHANGE_INPUT:
                    draft[action.fieldName]=action.fieldValue;
                    break;
            default :
        }
    });
}