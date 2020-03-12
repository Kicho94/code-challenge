import {createStore, applyMiddleware, combineReducers}  from 'redux';
import {rootReducer} from './reducers/rootReducer';
import thunk from 'redux-thunk';

const singleReducer = combineReducers({   
   rootReducer
})

const store = createStore(singleReducer, applyMiddleware(thunk));


export default store;
