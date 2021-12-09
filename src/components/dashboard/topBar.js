import { useHistory } from "react-router-dom";

function Topbar(){

    const history = useHistory();
    const Logout = ()=>{
         localStorage.removeItem('token');
         history.push("/")  
    }

    return(
        <>
            <nav className="navbar navbar-inverse navbar-expand-md navbar-dark bg-primary ">
                <div className=" container">
                    <ul className="navbar-nav">
                        <li className="nav-item"><a class="nav-link " href="#d">User Posts</a></li> 
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="nav-item"><button onClick={ Logout} className=" btn btn-primary btn-outline-dark ">Logout</button></li>  
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Topbar;