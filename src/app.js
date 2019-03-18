import ReactDOM from 'react-dom';
import React from 'react';
import 'normalize.css/normalize.css';//Resets the browser in-built styling(css reset)
import './styles/styles.scss';
import AppRouter, { history } from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/storeConfig';

import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';
import getVisibleExpenses from './selectors/expenses';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase'

const store = configureStore();
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


let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {

            ReactDOM.render(jsx, appRoot);
            hasRendered = true;

    }
}
ReactDOM.render(<p>Loading...</p>, appRoot)


firebase.auth().onAuthStateChanged((user) => {//will stay the same even after refresh
    if(user) {
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout());

        renderApp();

        history.push('/');
    }
})





