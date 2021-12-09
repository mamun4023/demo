import { createStore, compose, applyMiddleware} from "redux";
import Thunk from 'redux-thunk';
import Reducer from './rootReducer';


const Store  = createStore(Reducer, compose(applyMiddleware(Thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

export default Store;



