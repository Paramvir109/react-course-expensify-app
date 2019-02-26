import { shallow } from 'enzyme';
import React from 'react';
import { EditExpensePage } from '../../components/EditExpense';
import expenses from '../fixtures/expenses';

let editExpense,startRemoveExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
     history = {
        push : jest.fn()
    }
     wrapper = shallow(<EditExpensePage editExpense={editExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenses[0]} />);
})

test('Should render editExpense component', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should handle editExpense ', () => {
    
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id,expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');

})
test('Should handle startRemoveExpense ', () => {
    
    wrapper.find('button').simulate('click');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id : expenses[0].id});
    expect(history.push).toHaveBeenLastCalledWith('/');
})