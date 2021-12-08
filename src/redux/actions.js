import * as actionTypes from "./types";
import {toast} from 'react-toastify';



export const Login = (data)=>{

   

    if(data.email = "mamun754023@gmail.com" && data.password == "1234"){
        localStorage.setItem("token",'dfdfdfdf')
        toast.success("success")

    }else{
        toast.warning("failed")
    }

    return{
        type : actionTypes.LOGIN_SUCCESS,
        payload : data
    }
}