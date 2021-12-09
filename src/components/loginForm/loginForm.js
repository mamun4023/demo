import { useState } from "react";
import{useDispatch} from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from '../../redux/auth/actions';
import { useHistory } from "react-router";

function LoginForm(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const history = useHistory();
    const dispatch = useDispatch();
    const {Login} = bindActionCreators(actions, dispatch);

    const submitHander = (e)=>{
        e.preventDefault();
        const user = {
            email,
            password
        }
        Login(user);
            if(localStorage.getItem('token')){
                history.push("/dashboard")
       }
    }

    return(
        <> 
           <div className = "container border py-3">
                <h1 className = "p-2 text-center text-white bg-primary" >User Login</h1>
                <form onSubmit = {submitHander} >
                    <div class="form-group">
                        <label for="email">Email address:</label>
                        <input
                             type="email" 
                             class="form-control" 
                             placeholder="Enter email" 
                             id="email" 
                             name = {email}
                             onChange = {(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password:</label>
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Enter 
                            password" 
                            id="pwd" 
                            name = {password}
                            onChange = {(e)=> setPassword(e.target.value)} 
                        />
                    </div>
                    <hr/>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm;