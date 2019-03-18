import * as firebase from 'firebase';//importing all the named exports and dumping them on firebasse variable

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};  
firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();//Used for authentication

export {firebase, googleAuthProvider, database as default };

//In sql we have tables, mongoDB - collections, firebase -> references
//If we dont provide anything to ref it accesses the root of db

//All these set calls are asynchronous

// database.ref().set( {
//     name : "Paramvir Singh",
//     age : 20,
//     job : {
//         position : 'Software developer',
//         place : 'Google'
//     },
//     isSingle : true,
//     location : {
//         city : 'Delhi',
//         country : 'India'
//     }
// }).then(() => {
//     console.log('Data saved')
// }).catch((e) => {
//     console.log('Error occurred',e);
// });
//Another database.set().ref() Will completely override the previous data in ref

// database.ref().set('This is my data')  Not necessary to take an object

// database.ref('age').set(27)//This will update as we are providinng reference to that property only
// database.ref('location/city').set('New Delhi')
// database.ref('attributes').set({//will add a new prop to root(named as attributes)
//     height : 180,
//     weight : 75
// }).then(() => {
//     console.log('Data saved 2')
// }).catch((e) => {
//     console.log('Error occurred 2',e);
// });

//REMOVE
// database.ref('isSingle').remove().then(() => {
//     console.log("Remove succeeded.")
//   })
//   .catch((error) => {
//     console.log("Remove failed: " + error.message)
//   });
//   //Or uset set(null) to remove the data

//UPDATE
// database.ref().update({//We can delete, add, update existing values/new values
//     name : 'Paramvir',
//     age : 21,
//     isSingle : null,
//     job : 'Software developer',
//     // location : {//this is the new location object(updates occur at root level only)
//     //     city : 'Mumbai'
//     // }
//     'location/city' : 'Bangalore'//Valid syntax to just update city prop
// })

//FETCH
// database.ref().once('value')
//     .then((snapshot) => {console.log(snapshot.val())})
//     .catch((e) => {console.log('Error fetching', e.message)})
// database.ref().on('value', (snapshot) => {console.log(snapshot.val())})//Similar to store.subscribe(We run it to again and again so we dont use promises)
                                                        //Since promises are resolved only once
    
// const onValueChange =  database.ref().on('value', 
// (snapshot) => {console.log(snapshot.val())}//return value is this console.log function
// ,(e) => {console.log(e)})
// setTimeout(() => {
//     database.ref('age').set(23);
// },3500);
// setTimeout(() => {
//     // database.ref().off()//Will unsubscribe all the on methods
//     database.ref().off(onValueChange);//Unsubscribe particular method
// },3500);
// setTimeout(() => {
//     database.ref('age').set(13);
// },3500);

// database.ref().on('value', (snapshot) => {
//     const obj = snapshot.val();
//     console.log(`${obj.name} is a ${obj.job.position} at ${obj.job.place}`)
// })

//STORING LIST LIKE DATA
// database.ref('notes').push({//Notes obj will contain a random generated id with the passed object as thevalue
//     title : 'abc',
//     body : 'bcd'
// })
// database.ref('expenses').push({
//     description : 'bill',
//     amount : 123,
//     createdAt : 0,
//     note : ''
// })

//FETCHING THE EXPENSES AND CREATING ARRAY OUT OF IT
// database.ref('expenses').on('value',(snapshot) => {
//     let expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id : childSnapshot.key,//That unique key created by firebase
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// },(e) => {console.log(e)})
// // child_removed //will trigger if any child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed will trigger if any child updated
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// //This event will be triggered once for each initial child at this location, and it will be triggered again
// // every time a new child is added. 
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

   
