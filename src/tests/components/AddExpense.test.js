import { shallow } from 'enzyme';
import React from 'react';
import { AddExpensePage } from '../../components/CreateExpense';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn()
     history = {
        push : jest.fn()
    }
     wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
})


test('Should render AddExpense component', () => {
    
    expect(wrapper).toMatchSnapshot();
})

test('Should handle onSubmit' ,() => {
  
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);

})