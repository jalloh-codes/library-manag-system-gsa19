import { createStore, applyMiddleware, compose } from "redux";
import books from '../reducer/bookReducer';
import thunk from 'redux-thunk';

const initialState = {};

const middleleware = [thunk];



const store = createStore(books, initialState, compose(
    applyMiddleware(...middleleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);


export default store;