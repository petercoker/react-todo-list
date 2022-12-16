const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// Old way: We want to just print out the first two numbers in alphabet
// let a = alphabet[0];
// let b = alphabet[1];
// let c = alphabet[2];
// console.log(a);
// console.log(b);
// console.log(c);

// New way: We want to print out the first two numbers in alphabet
// let [a, b, c] = alphabet;
// console.log(a);
// console.log(b);
// console.log(c);

// let [a,, c] = alphabet; //Skip b
// console.log(a);
// console.log(c);

// let [a,, c, ...rest] = alphabet; //Skip b
// console.log(a);
// console.log(c);
// console.log(rest);

// function sumAndMultiply(a, b) {
//   return [a + b, a * b];
// };

// let sumAndMultiply = (a, b) => [a + b, a * b];
// const array = sumAndMultiply(2, 3);
// console.log(array);

// Using destructing, to get the first and second parameters
// let sumAndMultiply = (a, b) => [a + b, a * b];
// const [sum, multiply, division = 'no divison'] = sumAndMultiply(2, 3); // We can set a default value with the example of divison
// console.log(sum);
// console.log(multiply);
// console.log(division);

// Using destructing, to get the first and second parameters
// let sumAndMultiply = (a, b) => [a + b, a * b, a / b]; // Added three parameters
// const [sum, multiply, division = 'no divison'] = sumAndMultiply(2, 3); // We can set a default value with the example of divison
// console.log(sum);
// console.log(multiply);
// console.log(division);

// Using destructing, to get the first and second parameters
// let sumAndMultiply = (a, b) => [a + b, a * b]; // When the three parameters is not set the default value is printed instead
// const [sum, multiply, division = 'no divison'] = sumAndMultiply(2, 3); // We can set a default value with the example of divison
// console.log(sum);
// console.log(multiply);
// console.log(division);

// Destructuring on a object
// const personOne = {
//     name: 'John',
//     surname: 'Coker',
//     age: 25,
//     address: {
//         city: 'Dublin',
//         country: 'Ireland'
//     }
// };

// const personTwo = {
//     name: 'Peter',
//     surname: 'Coker',
//     age: 28,
//     address: {
//         city: 'Barcelona',
//         country: 'Spain'
//     }
// };

// const { name, age} = personTwo;
// console.log(name);
// console.log(age);

// const { name: firstName, age} = personTwo; // we can change the name as well and just get the first name
// console.log(firstName);
// console.log(age);

// const { name, age, favoriteFood = 'Pizza'} = personTwo; // we can also have default values, if the don't have a favorite added here in this example
// console.log(name);
// console.log(age);
// console.log(favoriteFood);

// const personTwo = {
//     name: 'Peter',
//     surname: 'Coker',
//     favoriteFood: 'Nigerian Beans',
//     age: 28,
//     address: {
//         city: 'Barcelona',
//         country: 'Spain'
//     }
// };
// const { name, age, favoriteFood = 'Pizza'} = personTwo; // Here favouriteFood is added but the  default values will be printed if favourite food field is removed
// console.log(name);
// console.log(age);
// console.log(favoriteFood);

// const { name, ...rest} = personTwo;
// console.log(name);
// console.log(rest);

// We can destructure nested objectsÏ
// const { name, address: { city }} = personTwo;
// console.log(name);
// console.log(city);

// We can destructure nested objectsÏ
// const { name, address: { street }} = personTwo;
// console.log(name);
// console.log(street); // prints undefined

// const personOne = {
//   name: "John",
//   surname: "Coker",
//   age: 25,
//   address: {
//     city: "Dublin",
//     country: "Ireland",
//   },
// };
// const personTwo = {
//   age: 28,
//   favoriteFood: "Nigerian Beans",
// };

// const personThree = { ...personOne, ...personTwo };
// console.log(personThree);

// const personOne = {
//   name: "John",
//   surname: "Coker",
//   age: 25,
//   address: {
//     city: "Dublin",
//     country: "Ireland",
//   },
// };
// const personTwo = {
//   age: 28,
//   favoriteFood: "Nigerian Beans",
// };

// function printUser(user) {
//   console.log(user);
// }

// let printUser = (user) => console.log(user);
// printUser(personOne);

//old way without destructuring
// let printUser = (user) => console.log(`Name: ${user.name}\nAge: ${user.age}`);
// printUser(personOne);

//new way with destructuring
// let printUser = ({name, age}) => console.log(`Name: ${name}\nAge: ${age}`);
// printUser(personOne);

//new way with destructuring and we can also set a default
// let printUser = ({name, age, favoriteFood = 'Burger'}) => console.log(`Name: ${name}\nAge: ${age}\nFavoriteFood: ${favoriteFood}`);
// printUser(personOne);

const personOne = {
    name: "John",
    surname: "Coker",
    favoriteFood: "Yam",
    age: 25,
    address: {
      city: "Dublin",
      country: "Ireland",
    },
  };
//new way with destructuring and we can also set a default and 
let printUser = ({name, age, favoriteFood = 'Burger'}) => console.log(`Name: ${name}\nAge: ${age}\nFavoriteFood: ${favoriteFood}`); //Yam is printed instead of burger is there is no need for default unless yam gets removed
printUser(personOne);
