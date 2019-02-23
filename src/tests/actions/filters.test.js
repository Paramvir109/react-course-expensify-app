import moment from 'moment';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate,  } from '../../actions/filters';

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual( {
        type : 'SET_START_DATE',
        startDate : moment(0)
    })
})

test('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual( {
        type : 'SET_END_DATE',
        endDate : moment(0)
    })
})
test('Should generate sortByDate action object', () => {
    const action = sortByDate();
    expect(action).toEqual( {
        type : 'SORT_BY_DATE',
        
    })
})
test('Should generate sortByAmount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual( {
        type : 'SORT_BY_AMOUNT',
        
    })
})
test('Should generate setTextFilter action object', () => {
    const action = setTextFilter('Okay');
    expect(action).toEqual( {
        type : 'SET_TEXT_FILTER',
        text : 'Okay'
        
    })
})
test('Should generate setTextFilter action object using default values', () => {
    const action = setTextFilter();
    expect(action).toEqual( {
        type : 'SET_TEXT_FILTER',
        text : ''
        
    })
})




