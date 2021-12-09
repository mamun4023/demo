
import Body from '../components/dashboard/body';
import Topbar from '../components/dashboard/topBar';


function Dashboard(){

    return(
        <>

            <div className='row'>
                <Topbar/>
                <Body/>
            </div>

        </>
    )
}


export default Dashboard;