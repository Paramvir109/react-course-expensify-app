import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should setup default filter values' , () => {
    const state = filterReducer(undefined, {type : '@@INIT'})//It's is the default action which is thrown behind the scenes
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    
    
    })
})
test('should setup sort by amount' , () => {
    const state = filterReducer(undefined, {type : 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})
test('should setup sort by date' , () => {
    const currState = {
        text : '',
        startDate: undefined,
        endDate : undefined,
        sortBy : 'amount'
    }
    const state = filterReducer(currState, {type : 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})
test('should setup text filter' , () => {
    const state = filterReducer(undefined, {type : 'SET_TEXT_FILTER', text : 'ok'})
    expect(state.text).toBe('ok')
})
test('should setup start date' , () => {
    const date = moment(0);
    const state = filterReducer(undefined, {type : 'SET_START_DATE', startDate : date})
    expect(state.startDate).toEqual(date)
})
test('should setup end date' , () => {
    const date = moment(0);

    const state = filterReducer(undefined, {type : 'SET_END_DATE', endDate : date})
    expect(state.endDate).toEqual(date)
})