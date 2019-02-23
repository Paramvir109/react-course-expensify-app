import moment from 'moment';

export default (expenses, {startDate, endDate, text, sortBy}) => {
    //for filtering all expenses b/w a given duration and matched text in desccription field
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt)
        const startTimeMatch = startDate ? createdAtMoment.isSameOrAfter(startDate,'day') :true;
        const endTimeMatch = endDate ? createdAtMoment.isSameOrBefore(endDate, 'day') :true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());//Both converted to lowercase 
        return startTimeMatch && endTimeMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date') {
           return a.createdAt < b.createdAt? 1 : -1;//Most recent expense first
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount? 1 : -1;//Most expensive first
         }
    })
    
} 