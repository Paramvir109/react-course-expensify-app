import { createStore } from 'redux';
 
// const incrementCount = ( payload = {}) => ({
//     type : 'INCREMENT',
//     incrementBy : typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

//Action generators --> return an object
const incrementCount = ({incrementBy = 1} = {}) => ({//Object destructuring(with default value )
    type : 'INCREMENT',
    incrementBy//Default value will be in two cases
                //When an object is provided without incrementBy
                //When no object is provided -> It destructures default object(empty in this case thus giving value of 1)
})
const decrementCount = ({decrementBy = 1} = {}) => ({//Object destructuring(with default value )
    type : 'DECREMENT',
    decrementBy
})
const resetCount = () => ({//Object destructuring(with default value )
    type : 'RESET',
})
const setCount = ({count}) => ({type : 'SET', count})

/*Reducers
1. Are pure functions(output is totally dependent on input(params) provided, no global variable used)
2. State and action are not to be changed(immutable)
*/


const countReducer = (state = { count: 0 },action) => {//Default object in params

    switch(action.type) {
        case('INCREMENT') :
            return {
                count : state.count + action.incrementBy//We are using currstate to update
            }
        case('DECREMENT') :
            return {
                count : state.count - action.decrementBy
            }
        case ('RESET') :
            return {
                count : 0
            }
        case ('SET') :
            return {
                count : action.count
            }
        default :
            return state;//When no action is passed
    }
  
};

const store = createStore(countReducer);


//return value of this is a fuction which can be called to unsubscribe anytime we want
store.subscribe(() => {//runs everytime when a change is made to the store
    console.log(store.getState());
})
// Actions -- are but an object that can change the state

//type property is a must
// store.dispatch( { //Will cause to run createStore fn to run again
//     type : 'INCREMENT',//Convention to use this(not necessary)
//     incrementBy : 5
// });
//OR -> better way

store.dispatch( incrementCount({incrementBy : 5}));

store.dispatch( resetCount() );

store.dispatch( decrementCount({decrementBy : 5}));

store.dispatch( decrementCount());

store.dispatch( setCount({count : 101}) );


