import * as actionTypes from "./types";

const initialState = {
    users : [],
}

const Reducer = (state = initialState, action)=>{
    switch (action.type) {
      
        case actionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                users : action.payload,
            }

        default:
            return state
    }
}

export default Reducer;