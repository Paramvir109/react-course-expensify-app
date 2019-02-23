import selectExpensesTotal from '../../selectors/expenses-total';
import moment from 'moment';

const expenses = [{
    id : '1',
    description : 'Bill',
    note : '',
    amount : 1,
    createdAt : 0
}, {
    id : '2',
    description : 'Rent',
    note : '',
    amount : 2,
    createdAt : moment(0).add(4, 'days').valueOf()
}, {
    id : '1',
    description : 'Credit card',
    note : '',
    amount : 3,
    createdAt : moment(0).subtract(4, 'days').valueOf()
}]
test('Should return 0 if no expenses', () => {
    const sum = selectExpensesTotal([]);
    expect(sum).toBe(0);
})
test('Should correctly add up single expense', () => {
    const sum = selectExpensesTotal([expenses[0]]);
    expect(sum).toBe(1);
})

test('Should correctly add up multiple expenses', () => {
    const sum = selectExpensesTotal(expenses);
    expect(sum).toBe(6);
})