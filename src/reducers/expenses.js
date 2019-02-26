const expenseReducerDefaultState = []


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
        case 'SET_EXPENSES' : 
            return action.expenses
            
        default :
            return state
    }
};

export default expenseReducer;