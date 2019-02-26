import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { addExpense, removeExpense, editExpense, startAddExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const expenseData = expenses[2];
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : expenses[2]   
    })
})

//done is used for async functions

test('Should add expense to the db and store', async (done) => {//To test which actions were dispatched we use redux-mock-store
    const store = createMockStore({});
    const expenseData = {
        description : 'Bills',
        amount : 123,
        createdAt : 0,
        note : ''
    }
    // store.dispatch(startAddExpense(expense)).then(() =>{
    //     const actions = store.getActions();//Will contain the dispatched actions

    //     expect(actions[0]).toEqual({
    //         type : 'ADD_EXPENSE',
    //         expense : {
    //             id : expect.any(String),
    //             ...expense
    //         }
    //     })
    //     done();
    // })
    await store.dispatch(startAddExpense(expenseData));
    const actions = store.getActions();//Will contain the dispatched actions

    expect(actions[0]).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
                id : expect.any(String),
                ...expenseData
            }
    })
    const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value');
    expect(snapshot.val()).toEqual(expenseData);
    done();


})

test('Should add expense with default values to the db and store', async (done) => { 
    const store = createMockStore({});

    await store.dispatch(startAddExpense({}));
    const actions = store.getActions();//Will contain the dispatched actions

    expect(actions[0]).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
                id : expect.any(String),
                description : '',
                note : '',
                amount : 0,
                createdAt : 0
            }
    })
    const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value');
    expect(snapshot.val()).toEqual({
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    });
    done();
})

// test('Should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type : 'ADD_EXPENSE',
//         expense : {
//             description : '',
//             note : '',
//             amount : 0,
//             createdAt : 0,
//             id : expect.any(String)
//         }
//     })
// })