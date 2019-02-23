// SET-TEXT-FILTER
export const setTextFilter = (text = '') => ({
    type : 'SET_TEXT_FILTER',
    text
});
// SORT BY DATE
export const sortByDate = () => ({
    type : 'SORT_BY_DATE'
});
// SORT BY AMT
export const sortByAmount = () => ({
    type : 'SORT_BY_AMOUNT'
});
// SET ST DATE , SET END DATE
export const setStartDate = (startDate) => ({
    type : 'SET_START_DATE',
    startDate,
})
export const setEndDate = (endDate) => ({
    type : 'SET_END_DATE',
    endDate,
})