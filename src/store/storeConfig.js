import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expenseReducer from './../reducers/expenses';
import filterReducer from './../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses  : expenseReducer,
            filters : filterReducer
        }),//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
}
//Compose is used when you want to pass multiple store enhancers to the store. 
//Store enhancers are higher order functions that add some extra functionality to the store. 
//The only store enhancer which is supplied with Redux by default is applyMiddleware however many other are available.




