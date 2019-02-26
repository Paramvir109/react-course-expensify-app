//component calls action gen
//action gen return obj
//component dispatches obj
//redux store changes

//To use firebase -> action gen returns a function
//component dispatches fn
//fn runs(can dispatch other actions and do whatever it wants)

import uuid from 'uuid';
import database from '../firebase/firebase'

// ADD_EXPENSE
export const addExpense =  (expense) => ({
    type : 'ADD_EXPENSE',
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {//We can't return functions as such (SO we used middleware, see store config)
         const   {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0

        } = expenseData;
        const expense = {description, note, amount, createdAt};
        return database.ref('expenses').push(expense).then((ref) =>{//thenable will recieve ref
            dispatch(addExpense({
                id : ref.key,
                ...expense
            }))
        })

    }
}


// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})
export const startEditExpense = (id,updates) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then(() =>{
            dispatch(editExpense(id,updates));
        })
    }
}

// REMOVE_EXPENSE
export  const removeExpense = ({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})  

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() =>{
            dispatch(removeExpense({id}));
        })
    }
}

//SET_EXPENSE (will set expenses array that we fetch from firebase to redux store)

export const setExpenses = (expenses) => ({
    type : 'SET_EXPENSES',
    expenses
}) 

export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            let expenses = []
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id : childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses));
        })
    }
}