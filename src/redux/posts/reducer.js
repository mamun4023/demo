import * as Types from './types';

const initialState = {
    articles : [],
    loading : false,
    error : []
}

const Reducer = (state = initialState, action)=>{
    switch (action.type) {
        case Types.FETCH_POSTS_REQUEST:
            return{
                ...state,
                loading : true
            }
        case Types.FETCH_POSTS_SUCCESS:
            return{
                ...state,
                articles : action.payload,
                loading : false
            }
        case Types.FETCH_POSTS_FAILURE:
            return{
                ...state,
                error : action.payload,
                loading : false
            }
        default:
            return state
    }
}

export default Reducer;