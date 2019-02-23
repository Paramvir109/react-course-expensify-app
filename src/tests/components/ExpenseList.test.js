import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import { shallow  } from 'enzyme';
import expenses from '../fixtures/expenses';

test('Should render expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
})
test('Should render expense list with empty messagee', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
})