import React from 'react'
import { connect } from 'react-redux';
import {addExpense} from './../actions/expenses'
import ExpenseForm from './ExpenseForm';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.addExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>This is from my add expense component</h1>
        <ExpenseForm onSubmit={this.onSubmit}/>
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
    addExpense : (expense) => dispatch(addExpense(expense))
  }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage);