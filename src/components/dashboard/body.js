import {useEffect}from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../../redux/userlist/action';
import Loading from '../loadingSpiner';

function DasboadBody(){

    const dispatch = useDispatch();

    useEffect(()=>{ 
        dispatch(fetchPosts())
    },[])

    const userPosts = useSelector(state => state.userPosts.articles)
    const loading = useSelector(state =>state.userPosts.loading);
    
    if(loading){
        return <Loading/>
    }

    return(
        <>
            <div className="container">
            {
                userPosts.map(data =>
                    <div class="card m-4">
                    <div class="card-body">
                        <h5 class="card-title text-primary"> {data.title} </h5>
                        <p class="card-text"> {data.body} </p>
                        <p> Posted id : {data.id}</p>
                    </div>
                </div> 
                )
            }
            </div>
        </>
    )
}

export default DasboadBody;