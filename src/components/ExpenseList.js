import React from 'react'
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenseList from './../selectors/expenses';
export const ExpenseList = (props) => (//Route sends some built in props
    <div>
        <h1>Expense List</h1>
        {props.expenses.length === 0 ? (<p>No expenses</p>):(props.expenses.length)}
        {props.expenses.map((expense) => (<ExpenseListItem key={expense.id} {...expense}/>))}
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

