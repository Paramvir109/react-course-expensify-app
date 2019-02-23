import {BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react'

import  Header  from './../components/Header';
import  ExpenseDashboardPage  from './../components/ExpenseDashboard';
import  AddExpensePage  from './../components/CreateExpense';
import  EditExpensePage  from './../components/EditExpense';
import  HelpPage  from './../components/Help';
import  NotFoundPage  from './../components/Error';

// We define routing config in jsx only
// BrowserRouter accepts a single content only

  //We need to tweak devserver config to actually access those routes (Else it'server side routing)
  //Browser tries to fetch the page which doesnt exist
  //Exact is done to remove ambiguity(Otherwise it uses atleast this path criteria)
  //Switch -(moves down till it finds a match and that route only)
  // :id being sent as prop (but no /edit page will exist now)
  const AppRouter = () => (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
export default AppRouter;