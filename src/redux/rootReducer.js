import {combineReducers}from 'redux';
import LoginReducer from "./auth/reducers";
import postsReducer from './posts/reducer';

const rootReducer = combineReducers({
    login : LoginReducer,
    userPosts : postsReducer
})

export default rootReducer;