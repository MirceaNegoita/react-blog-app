import {call,put} from "redux-saga/effects";
import {fetchAllPosts, fetchSinglePost} from "../services";

export function* getPosts(){
    try{    
        const response = yield call(fetchAllPosts);
    }catch(e){
        console.log(e);
    }
}

export function* getPosts(){
    try{
        const response = yield call(fetchSinglePost);
    }catch(e){
        console.log(e);
    }
}