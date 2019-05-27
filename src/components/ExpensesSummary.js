import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import selectExpenseList from './../selectors/expenses';
import expensesTotal from './../selectors/expenses-total';
import numeral from 'numeral';



export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    return(
    
     <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{props.expenseCount} </span> {expenseWord} totalling <span> Rs.{numeral(props.expensesSum/100).format('0,0.00')} </span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
    )

} 

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenseList(state.expenses, state.filters)
    return {
        expenseCount : visibleExpenses.length,
        expensesSum : expensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);