import { NavLink } from 'react-router-dom'
import React from 'react'

//We use navlink to provide more props which helps in styling
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink exact={true} activeClassName="is-active" to="/">Go home</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>

    </header>
);
export default Header;