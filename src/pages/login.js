import React from "react";
import { useHistory } from "react-router";
import LoginForm from '../components/loginForm/loginForm';

function LoginPage(){
    const history = useHistory();
    const token = localStorage.getItem('token');
    if(token){
        history.push('/dashboard')
    }

    return(
        <>  
            <div className = "row">
                <div className = "col-md"></div>
                <div className = "col-md">
                    <LoginForm />
                </div>
                <div className = "col-md"></div>
            </div>
        </>
    )
}

export default LoginPage;