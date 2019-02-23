import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0

    } = {}) => ({
    type : 'ADD_EXPENSE',
    expense : {
        id : uuid(),
        description ,
        note,
        amount,
        createdAt
    }
})


// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type : 'EDIT_EXPENSE',
    id,
    updates
})
// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type : 'REMOVE_EXPENSE',
    id
})
// SET-TEXT-FILTER
const setTextFilter = (text = '') => ({
    type : 'SET-TEXT-FILTER',
    text
});
// SORT BY DATE
const sortByDate = () => ({
    type : 'SORT_BY_DATE'
});
// SORT BY AMT
const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
});
// SET ST DATE , SET END DATE
const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate,
})
const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate,
})

const expenseReducerDefaultState = []
const filterReducerDefaultState = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined

}

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE' :
            return [...state,action.expense]//Not mutating state
        case 'REMOVE_EXPENSE' :
            return state.filter((expense) => expense.id !== action.id)
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates//spread op is also used to override existing key-value pairs
                    }
                } else {
                    return expense
                }
            })
        default :
            return state
    }
};
const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET-TEXT-FILTER' :
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy : 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy : 'date'

            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate : action.endDate
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate
            }

        default :
            return state
    }
};

//get visisble expenses

const getVisibleExpenses = (expenses, {startDate, endDate, text, sortBy}) => {
    //for filtering all expenses b/w a given duration and matched text in desccription field
    return expenses.filter((expense) => {
        const startTimeMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endTimeMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());//Both converted to lowercase 
        return startTimeMatch && endTimeMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
           return a.createdAt < b.createdAt? 1 : -1;//Most recent expense first
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount? 1 : -1;//Most expensive first
         }
    })
    
} 

const store = createStore(
    combineReducers({
        expenses  : expenseReducer,
        filters : filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visisbleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visisbleExpenses);

})
const expense1 = store.dispatch(addExpense({description : 'Rent', amount : 700, createdAt:-11000}) )//return value is the object created
const expense2 = store.dispatch(addExpense({description : 'Coffee', amount : 200, createdAt:-1000}) )
// store.dispatch(removeExpense({id : expense1.expense.id}));
// store.dispatch(editExpense(expense2.expense.id, {amount : 500}));

// store.dispatch(setTextFilter('Rent'));

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(-2000));
// store.dispatch(setEndDate(2000));
// store.dispatch(setTextFilter('rent'));



const demoState = {
    expenses : [
        {
            id: 'asdasd0',
            description : ' Jan rent',
            note : 'This was the final payment for that address',
            amount : 4000,
            createdAt : 0
        }
    ],
    //To retrieve the data, how to sort it, And retrieve b/w a range
    filters : {
        text : 'rent',
        sortBy : 'amount',//amt or date
        startDate : undefined,
        endDate : undefined
    }
}