import { NavLink } from 'react-router-dom'
import React from 'react'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth'

//We use navlink to provide more props which helps in styling
export const Header = ({startLogout}) => (
    <header>
        <h1>Expensify</h1>
        <NavLink  activeClassName="is-active" to="/dashboard">Dashboard</NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense</NavLink>
        <button onClick={startLogout}>Log out</button>
    </header>
);
const mapDispatchToProps = (dispatch) => ({
    startLogout : () => dispatch(startLogout())
})
export default connect(undefined,mapDispatchToProps)(Header);