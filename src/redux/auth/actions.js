import * as actionTypes from "./types";
import {toast} from 'react-toastify';

export const Login = (data)=>{
    if(data.email === "mamun@gmail.com" && data.password === "123"){
        localStorage.setItem("token",'dfdfdfdfddd4343dd')
        toast.success(" login successful")
    }else{
        toast.warning("Enter correct credentials")
    }
    return{
        type : actionTypes.LOGIN_SUCCESS,
        payload : data
    }
}