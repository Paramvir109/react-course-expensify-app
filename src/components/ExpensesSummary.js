import React from 'react'
import { connect } from 'react-redux';
import selectExpenseList from './../selectors/expenses';
import expensesTotal from './../selectors/expenses-total';
import numeral from 'numeral';



export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    return(

        <div>
            <h1>
                Viewing {props.expenseCount} {expenseWord} totalling  Rs.{numeral(props.expensesSum/100).format('0,0.00')} 
            </h1>
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