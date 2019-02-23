import expenseReducer from '../../reducers/expenses';
import expenses from './../fixtures/expenses'


test('should setup default expense values' , () => {
    const state = expenseReducer(undefined, {type : '@@INIT'})//It's is the default action which is thrown behind the scenes
    expect(state.length).toBe(0)
})

test(' should add expense ', () => {
    const expense = {
        id : 4,
        description : 'loan payment',
        amount : '1345',
        createdAt : 0,
        note : ''
    }
    const state = expenseReducer(expenses,{type : 'ADD_EXPENSE', expense});
    expect(state.length).toBe(4);
})
test(' should remove expense with id ', () => {

    const state = expenseReducer(expenses,{type : 'REMOVE_EXPENSE', id : expenses[1].id});
    expect(state.length).toBe(2);
})

test(' should not remove expense with invalid id ', () => {

    const state = expenseReducer(expenses,{type : 'REMOVE_EXPENSE', id : -1});
    expect(state.length).toBe(3);
})
test(' should edit expense ', () => {
    const updates = {
        amount : '1345',
        note : 'Lol'
    }
    const state = expenseReducer(expenses,{type : 'EDIT_EXPENSE', id : expenses[0].id, updates});
    expect(state[0]).toEqual({...expenses[0], ...updates})
})
test(' should not edit expense with invalid id ', () => {
    const updates = {
        amount : '1345',
        note : ''
    }
    const state = expenseReducer(expenses,{type : 'EDIT_EXPENSE', id : -1, updates});
    expect(state).toEqual(expenses);
})
