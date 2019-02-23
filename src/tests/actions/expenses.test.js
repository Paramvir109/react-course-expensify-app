import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
    const action = removeExpense({id : '123'});
    expect(action).toEqual({type : 'REMOVE_EXPENSE',id : '123'})
})
test('Should setup edit expense action object', () => {
    const updates = {note : 'A new note'};
    const action = editExpense('123', updates);
    expect(action).toEqual({type : 'EDIT_EXPENSE',id : '123', updates})
})
test('Should setup add expense action object', () => {
    const expenseData = {
        description : 'Coffee',
        note : 'drink',
        amount : 15,
        createdAt : 123

    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    })
})
test('Should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            description : '',
            note : '',
            amount : 0,
            createdAt : 0,
            id : expect.any(String)
        }
    })
})