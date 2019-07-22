import {GET_BRANDS, GET_BRANDS_SUCCESS, GET_BRANDS_FAILURE, GET_CHOCOLATES, GET_CHOCOLATES_SUCCESS, GET_CHOCOLATES_FAILURE, CHANGE_INPUT } from "../actionTypes/posts";
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
    } from "../actionTypes/posts.js";
export function getChocolates(){
    return { type: GET_CHOCOLATES};
}

export function getChocolateSuccess(chocolates){
    return { type : GET_CHOCOLATES_SUCCESS, chocolates};
}

export function getChocolateFailure(error) {
    return { type : GET_CHOCOLATES_FAILURE, error };
}

export function getBrands(){
   return {type : GET_BRANDS };
}
export function getBrandsSuccess(brands){
    return {type : GET_BRANDS_SUCCESS,
    brands };
}
export function getBrandsFailure(){
   return {type : GET_BRANDS_FAILURE};
}

export function getChocolatesById(id){
    return { type :GET_CHOCOLATES_BY_ID,id };
}
export function getChocolateByIdSuccess(id_chocolate){
    return { type : GET_CHOCOLATES_BY_ID_SUCCESS,id_chocolate };
}

export function getChocolateByIdFailure(error){
    return { type : GET_CHOCOLATES_BY_ID_FAILURE,error};
}

export function getBrandsById(id){
    return { type : GET_BRANDS_BY_ID,id };
}

export function getBrandsByIdSuccess(id_brands){
    return { type : GET_BRANDS_BY_ID_SUCCESS,id_brands};
}

export function getBrandsByIdFailure(error){
    return { type : GET_BRANDS_BY_ID_FAILURE,error};
}
export function searchChocolate(search){
    return { type : SEARCH_CHOCOLATE,search};
}
export function searchChocolateSuccess(search_Success){
    return { type: SEARCH_CHOCOLATE_SUCCESS,search_Success};
}
export function searchChocolateFailure(error){
    return { type : SEARCH_CHOCOLATE_FAILURE,error};
}

export function change_input(fieldName,fieldValue){
    return {type:CHANGE_INPUT,fieldName,fieldValue}
}