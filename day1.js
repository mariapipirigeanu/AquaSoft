//1. Metode de ES6
//New Number Methods
//The Number.isInteger() Method- returns true if the argument is an integer
console.log(Number.isInteger(6));        // returns true
console.log(Number.isInteger(6.5));      // returns false

//The Numer.isSafeInteger() Method - returns true if the argument is a safe integer
console.log(Number.isSafeInteger(6));    // returns true
console.log(Number.isSafeInteger(12345678901234567890));  // returns false

//New Global Methods
//The isFinite() Method - returns false if the argument is Infinity or NaN
console.log(isFinite(10/0));       // returns false
console.log(isFinite(10/1));       // returns true

//The isNaN() Method - returns true if the argument is NaN
console.log(isNaN("Hello"));       // returns true

//2.Diferenta intre var, let, const
//const-declară o constantă locală (block scope)
//const trebuie initializata la declarare obligatoriu, nu se redeclara, nu isi schimba valoarea
const number=1000;

//var-declară o variabilă (function scope)
//var poate fi optional initializata, se poate redeclara, isi poate schimba valoarea
var catName = 'Tom';
var catName = 'Bagira'; // e ok

//let - declară o variabilă locală (block scope)
//let poate fi optional initializata, nu se poate redeclara, isi poate schimba valoarea
let catName1 = 'Tom';
catName1 = 'Bagira'; // e ok

//3.spread operator
//Spread operator can be used in many cases,like when we want to expand,copy,concat,with math object.
// spread operator doing the concat job 
let arr = [1,2,3]; 
let arr2 = [4,5]; 
arr = [...arr,...arr2]; 
console.log(arr); // [ 1, 2, 3, 4, 5 ] 

// spread operator for copying  
let arr3 = ['a','b','c']; 
let arr4 = [...arr3]; 
  
console.log(arr3); // [ 'a', 'b', 'c' ] 
  
arr4.push('d'); //inserting an element at the end of arr4 
  
console.log(arr4); // [ 'a', 'b', 'c', 'd' ] 
console.log(arr3); // [ 'a', 'b', 'c' ] 

// expand using spread operator 
  
let arr5 = ['a','b']; 
let arr6 = [...arr5,'c','d']; 
  
console.log(arr6); // [ 'a', 'b', 'c', 'd' ] 

// min with spread  using Math.min() 
 
let arr7 = [1,2,3,-1]; 
console.log(Math.min(...arr7)); //-1 

//merging two objects using the spread operator
const user1 = { 
    name: 'Jen', 
    age: 22, 
}; 
  
const user2 = { 
    name: "Andrew", 
    location: "Philadelphia" 
}; 
  
const mergedUsers = {...user1, ...user2}; 
console.log(mergedUsers);

//4. object initializer, deep copy
//object initializer
var myCar = new Object();
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
console.log(myCar);

//other object initializer
var myCar1 = {
    make: 'Audi',
    model: 'A8',
    year: 1969
};
console.log(myCar1['model']);

//
const myCar2 = {};
myCar2['make'] = 'Ford';
myCar2['model'] = 'Mustang';
myCar2['year']= ' 1969';

console.log(myCar2.make);
//Iterating through an Object
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`)); // "foo: bar", "baz: 42"

var myobj = {
    "firstname": 'Maria',
    "secondname": 'Pipirigeanu',
    "age": 23
};
for (var prop in myobj) {
    if (myobj.hasOwnProperty(prop)) {
        // or if (Object.prototype.hasOwnProperty.call(myobj,prop)) for safety...
        console.log("prop: " + prop + " value: " + myobj[prop])
    }
}

//deep copy with custom function
//write a recursive JavaScript function that will make a deep copy of nested objects or arrays
const deepCopyFunction = (inObject) => {
    let outObject, value, key
  
    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = deepCopyFunction(value)
    }
  
    return outObject
  }
  
  let originalArray = [37, 3700, { hello: "world" }]
  console.log("Original array:", ...originalArray) // 37 3700 Object { hello: "world" }
  
  let shallowCopiedArray = originalArray.slice()
  let deepCopiedArray = deepCopyFunction(originalArray)
  
  originalArray[1] = 0 // Will affect the original only
  console.log(`originalArray[1] = 0 // Will affect the original only`)
  originalArray[2].hello = "moon" // Will affect the original and the shallow copy
  console.log(`originalArray[2].hello = "moon" // Will affect the original array and the shallow copy`)
  
  console.log("Original array:", ...originalArray) // 37 0 Object { hello: "moon" }
  console.log("Shallow copy:", ...shallowCopiedArray) // 37 3700 Object { hello: "moon" }
  console.log("Deep copy:", ...deepCopiedArray) // 37 3700 Object { hello: "world" }

//5.arrays
const fruits = []
fruits.push('banana', 'apple', 'peach')

console.log(fruits.length) // 3

fruits[5] = 'mango'
console.log(fruits[5])            // 'mango'
console.log(Object.keys(fruits))  // ['0', '1', '2', '5']
console.log(fruits.length)        // 6

//iteration- for loop
var myStringArray = ["Maria","Pipirigeanu"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
}

var names=['Maria','Ioana'];
for(const name of names){
    console.log(name);
}

var names=['Maria','Ioana'];
for(var i in names){
    console.log(names[i]);
}

//iteration forEach
const array = ["one", "two", "three"];
//array.forEach(item => console.log(item));
array.forEach(function (item, index) {
  console.log(item, index);
});

//mutator array methods
//sort()- it sorts the elements of an array
const myArray = [5, 4, 3, 2, 1]; // Sort from smallest to largest
console.log(myArray.sort((a, b) => a - b)); //return value: [1, 2, 3, 4, 5]

//unshift()- it adds one or more elements to the beginning of an array
console.log(myArray.unshift(6)); //return the new length of the array-> 6

//shift()- it removes the first element from an array
console.log(myArray.shift()); //6

//splice() -it removes or replaces existing elements and/or adds new elements.
console.log(myArray.splice(0, 1, 8)); // [1]

//push()- it adds one or more elements to the end of an array.
console.log(myArray.push(7)); //6

//reverse()-it reverses an array.
const myArray1 = ["e", "d", "c", "b", "a"]
myArray1.reverse();
console.log(myArray1); //['a', 'b', 'c', 'd', 'e']

//pop()- it removes the last element from an array.
console.log(myArray);// [ 8, 2, 3, 4, 5, 7 ]
myArray.pop();
console.log(myArray); //[ 8, 2, 3, 4, 5 ]

//fill()-it fills all the elements of an array with the same value.
myArray.fill(0, 1, 3);
console.log(myArray); //[ 8, 0, 0, 4, 5 ]

//forEach()-it applies a function to each element of the array.
const myArray2 = [
    { id: 1, name: "Maria" },
    { id: 2, name: "Ioana" },
  ]
  myArray2.forEach(element => console.log(element.name));

//6.Promise- a javascript promise can be: pending, fulfilled, rejected
//While a Promise object is "pending" (working), the result is undefined.
//When a Promise object is "fulfilled", the result is a value.
//When a Promise object is "rejected", the result is an error object.
const myPromise = new Promise((resolve, reject) => {
    let connection=true;  
    
    if(connection) {    
        resolve('Connection established');  
    } else {    
        reject('Connection refused');  
    }
});
//The then( ) method is called after the Promise is resolved. 
//Then we can decide what to do with the resolved Promise.
myPromise.then((message) => { 
    console.log(message);
}).catch((message) => { //if the promise fails => use the catch() method
    console.log(message);
});

//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.

function myDisplayer(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }

 myCalculator(5, 6, myDisplayer);

//7.async, await
//async makes a function return a Promise
//await makes a function wait for a Promise
//The keyword async before a function makes the function return a promise
async function myFunction() {
    return "Hello";
  }
myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
async function myFunction() {
    return Promise.resolve("Hello");
  }

//await only works inside an async function.
//If a Promise is passed to an await expression,
// it waits for the Promise to be fulfilled and returns the fulfilled value.
 function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x);
      }, 2000);
    });
  }
  
  async function f1() {
    var x = await resolveAfter2Seconds(10);
    console.log(x); // 10
  }
  
  f1();

//8.closure
// a closure gives  access to an outer function’s scope from an inner function. 
//In JavaScript, closures are created every time a function is created, at function creation time.
function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  var add5 = makeAdder(5);
  var add10 = makeAdder(10);
  
  console.log(add5(2));  // 7
  console.log(add10(2)); // 12