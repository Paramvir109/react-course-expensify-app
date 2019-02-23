import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
//We moved datepicker.css from expenseform.js to app.js(otherwse error here)

test('Should render ExpenseForm component', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})
test('Should render ExpenseForm component with the expense', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
})
test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {//e.preventdefault() //That is sent through here
        preventDefault : () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

})
test('Should set description on input change', () => {
    const value = 'New Descriptiion';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target : {value}
    })
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper).toMatchSnapshot();

});
test('Should set note on textarea change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : {value}
    })
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();

    

})
test('Should set amount on input change', () => {
    const value = '123.2';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    })
    expect(wrapper.state('amount')).toBe(value);

})
test('Should not set amount on input change(invalid)', () => {
    const value = '123.221';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    })
    expect(wrapper.state('amount')).toBe('');

})
test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {//e.preventdefault() //That is sent through here
        preventDefault : () => {}
    })
    expect(wrapper.state('error')).toBe('');

    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        amount : (expenses[0].amount),
        createdAt : expenses[0].createdAt,
        note :expenses[0].note
    })
})
test('Should set new Date on date change', () => {//.prop is a jest method
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onDateChange')(now);//Select by component name
    expect(wrapper.state('createdAt')).toEqual(now)
})
test('Should set focus onFocusChange', () => {//.prop is a jest method
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find(SingleDatePicker).prop('onFocusChange')({focused});//Select by component name
    expect(wrapper.state('calendarFocus')).toEqual(focused);
})