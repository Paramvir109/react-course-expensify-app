import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//dispatch method available from connect
export const ExpenseListItem = ({description, createdAt, amount, id, dispatch}) => (
    
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
        <h3 className="list-item__title">{description}</h3>
        <span  className="list-item__sub-title">{moment(createdAt).format('Do MMM YYYY')}</span>
        </div>
        <h3 className="list-item__data">Rs. {numeral(amount/100).format('0,0.00')} </h3>
   </Link>
);



export default connect()(ExpenseListItem);