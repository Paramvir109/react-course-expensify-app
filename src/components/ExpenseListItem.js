import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//dispatch method available from connect
export const ExpenseListItem = ({description, createdAt, amount, id, dispatch}) => (
    <div>
    <NavLink activeClassName="is-active" to={"/edit/" + id}>
         <h3>{description}</h3>
    </NavLink>
        <p>
            Rs.{numeral(amount/100).format('0,0.00')} 
            - 
            {moment(createdAt).format('Do MMM YYYY')}
        </p>
       
    </div>
);



export default connect()(ExpenseListItem);