import moment from 'moment';

const expenses = [{
    id : '1',
    description : 'Bill',
    note : '',
    amount : 100,
    createdAt : 0
}, {
    id : '2',
    description : 'Rent',
    note : '',
    amount : 122000,
    createdAt : moment(0).add(4, 'days').valueOf()
}, {
    id : '3',
    description : 'Credit card',
    note : '',
    amount : 1020000,
    createdAt : moment(0).subtract(4, 'days').valueOf()
}]

export default expenses;
