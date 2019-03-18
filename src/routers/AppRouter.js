import {Router, Route, Switch } from 'react-router-dom';
import React from 'react'

import  ExpenseDashboardPage  from './../components/ExpenseDashboard';
import  AddExpensePage  from './../components/CreateExpense';
import  EditExpensePage  from './../components/EditExpense';
import  NotFoundPage  from './../components/Error';
import  LoginPage  from './../components/LoginPage';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory()

// We define routing config in jsx only
// BrowserRouter accepts a single content only

  //We need to tweak devserver config to actually access those routes (Else it'server side routing)
  //Browser tries to fetch the page which doesnt exist
  //Exact is done to remove ambiguity(Otherwise it uses atleast this path criteria)
  //Switch -(moves down till it finds a match and that route only)
  // :id being sent as prop (but no /edit page will exist now)
  const AppRouter = () => (
    <Router history={history}>
      <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
export default AppRouter;