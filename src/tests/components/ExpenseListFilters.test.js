import { shallow } from 'enzyme';
import React from 'react';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
//startdate id and end date id will change everytime the component renders, so update the snapshot everytime
import {DateRangePicker} from 'react-dates';
import moment from 'moment';


let setTextFilter, sortByDate, sortByAmount,setStartDate, setEndDate, wrapper;
beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setEndDate = jest.fn();
    setStartDate = jest.fn();
    wrapper = shallow(
          <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)
})

test('Should render ExpenseListFilters component', () => {
    expect(wrapper).toMatchSnapshot();
})
test('Should render ExpenseListFilters component with alt data', () => {
    wrapper.setProps({
        filters : altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change', () => {
    const value = 'text';
    wrapper.find('input').simulate('change', {
        target : {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);

})
test('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
        filters : altFilters
    })
    //on clicking set the value to date as well
    wrapper.find('select').simulate('change', {
        target : {value}
    });
    expect(sortByDate).toHaveBeenCalled();

})
test('should sort by amount', () => {
    const value = 'amount';
    
    wrapper.find('select').simulate('change', {
        target : {value}
    });
    expect(sortByAmount).toHaveBeenCalled();

})
test('should handle date changes', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(4,'years');
    wrapper.find(DateRangePicker).prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

})
test('should handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);


})




