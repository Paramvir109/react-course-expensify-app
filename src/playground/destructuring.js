//Object Destructuring
// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;(person.name is searched and it's value is assigned to firstName.Default value is also used)
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName); // Penguin, Self-Published

//Array Destructring
const arr = ['mango', 'apple', 'banana', 'cherry'];

const[,index1,index2 = 'coconut']; //index1 == apple, index2 = banana(default value is being used as well)
