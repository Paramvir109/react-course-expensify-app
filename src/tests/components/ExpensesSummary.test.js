import { shallow } from 'enzyme';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('Should render expenses summary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesSum={1025}/>);
    expect(wrapper).toMatchSnapshot();
})
test('Should render expenses summary with more than 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={4} expensesSum={102235}/>);
    expect(wrapper).toMatchSnapshot();
})