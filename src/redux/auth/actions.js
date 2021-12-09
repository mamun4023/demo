import * as actionTypes from "./types";
import {toast} from 'react-toastify';



const loginRequest = ()=>{
    return{
        type : actionTypes.LOGIN_REQUEST
    }
}

const loginSuccess = (data)=>{
    
    
    
    return{
        type : actionTypes.LOGIN_SUCCESS,
        payload : data
    }
}


const loginFailed = (err)=>{
    return{
        type : actionTypes.LOGIN_FAILURE,
        payload : err
    }
}



export const Login = (data)=>{

    

    if(data.email === "mamun754023@gmail.com" && data.password === "1234"){
        localStorage.setItem("token",'dfdfdfdf')
        toast.success(" login successfull")

    }else{
        toast.warning("Enter correct credentials")
    }
    return{
        type : actionTypes.LOGIN_SUCCESS,
        payload : data
    }
}