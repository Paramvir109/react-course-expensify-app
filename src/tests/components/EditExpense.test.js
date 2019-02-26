import { shallow } from 'enzyme';
import React from 'react';
import { EditExpensePage } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let startEditExpense,startRemoveExpense, history, wrapper;

beforeEach(() => {
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
     history = {
        push : jest.fn()
    }
     wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[0]} />);
})

test('Should render editExpense component', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should handle startEditExpense ', () => {
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');

})
test('Should handle startRemoveExpense ', () => {
    
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id : expenses[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
})