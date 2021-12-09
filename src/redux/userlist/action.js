import axios from 'axios';
import * as Types from './types';

const fetchUserPostRequest = ()=>{
    return{
        type : Types.FETCH_USERS_REQUEST
    }
}

const fetchUserSuccess = (data)=>{
    return{
        type : Types.FETCH_USERS_SUCCESS,
        payload : data
    }
}

const fetchUserFailure  = err =>{
    return{
        type : Types.FETCH_USERS_FAILURE,
        payload : err
    }
}

export const fetchPosts = ()=>{
    return(dispatch)=>{
        dispatch(fetchUserPostRequest())
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res =>{
                dispatch(fetchUserSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchUserFailure(err.message))
            })
    }
}


