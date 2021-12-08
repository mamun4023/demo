import {useHistory} from 'react-router';

function Dashboard(){

    const history = useHistory();
  

    const logout = ()=>{
        localStorage.removeItem('token');
        history.push('/');
        
    }

    return(
        <>

            <button onClick = {logout}> logout</button>

        </>
    )
}


export default Dashboard;