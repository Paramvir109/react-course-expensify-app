import React from 'react'
import { connect } from 'react-redux';
import {startAddExpense} from './../actions/expenses'
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container" >
          <ExpenseForm onSubmit={this.onSubmit}/>
        </div>
      </div>
    );
  }
}

// export const AddExpensePage = (props) => (
//     <div>
//       <h1>This is from my add expense component</h1>
//       <ExpenseForm 
//         onSubmit={(expense) => {
//           // props.dispatch(addExpense(expense)); will change it to make test-able as well
//           props.onSubmit(expense);
//           props.history.push('/');//Will automatically redirect to dashboard page
//         }}
        
//       />
//     </div>
// );

//optional -> used to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense : (expense) => dispatch(startAddExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);