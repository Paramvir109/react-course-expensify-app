import React from 'react'
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenseList from './../selectors/expenses';
export const ExpenseList = (props) => (//Route sends some built in props
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        <div className="list-body"> 
            {props.expenses.length === 0 ? (<div className="list-item list-item__message"><span>No expenses</span></div>):
                (props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>)))
            }
        </div>
        
    </div>
);
//return value of connect is the function which is to be called to create a hoc

// const connectedExpenseList = connect((state) => {
//     //here this function tells bout which properties of store can be accesssed by the component(connectedExpenseList)
//     return {
//         expenses : state.expenses
//     }

// })(ExpenseList);

// export default connectedExpenseList;

//OR
const mapStateToProps = (state) => {
    return {
        expenses : selectExpenseList(state.expenses, state.filters)
    }

}
export default connect(mapStateToProps)(ExpenseList);

