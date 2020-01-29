import { createStore, applyMiddleware, compose, combineReducers} from "redux";
import bookReducer from '../reducer/bookReducer';
import rentReducer from '../reducer/rentReducer';
import studentReducer from '../reducer/studentReducer';
import thunk from 'redux-thunk';

const initialState = {};

const middleleware = [thunk];


const store = createStore(combineReducers({rentReducer, bookReducer, studentReducer}), initialState, compose(
    applyMiddleware(...middleleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;