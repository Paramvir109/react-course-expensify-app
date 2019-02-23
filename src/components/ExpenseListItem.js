import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

//dispatch method available from connect
export const ExpenseListItem = ({description, createdAt, amount, id, dispatch}) => (
    <div>
    <NavLink activeClassName="is-active" to={"/edit/" + id}>
         <h3>{description}</h3>
    </NavLink>
        <p>{amount} - {createdAt}</p>
       
    </div>
);



export default connect()(ExpenseListItem);