import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css/normalize.css';//Resets the browser in-built styling(css reset)
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/storeConfig';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';


// const store = configureStore();
// store.subscribe(() => {
//     const state = store.getState();
//     const visisbleExpenses = getVisibleExpenses(state.expenses, state.filters)
//     console.log(visisbleExpenses);

// })
// setTimeout(() => {
//     store.dispatch(setTextFilter('water'));

// }, 3000);

const appRoot = document.getElementById('app')

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)



ReactDOM.render(jsx, appRoot)


