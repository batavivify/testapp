// ********* LECTURE 11 ********* //

var outside = 'Im from outside! ';

const testFunction = function() {

    var test = 'Hello there ';
    this.outside;
    this.fromIndexBefore;
    this.fromIndexAfter;
    this.before;

    // return test  + outside + fromBladeBefore + fromBladeAfter + before;
};

// console.log(testFunction());




// ********* LECTURE 12 ********* //

// tasks 1, 2
const person = {
    "name": "John",
    "age": "28",
    "gender": "Male",
    "country": "Serbia",
};

console.log(person);




const family = [{
    "name": "Jane",
    "age": "25",
    "gender": "Female",
    "country": "Serbia",
    },
    {
        "name": "Sara",
        "age": "26",
        "gender": "Female",
        "country": "Russia",
    }];

console.log(family);




// tasks 3, 4
function Person(firstName, lastName, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;

    this.staticAttribute = "foo"; // task 5 - static attribute
    this.staticMethod = function() {  // task 5 - static method
        return "bar";
    };
}


const john = new Person('John','Doe','Male');
const sara = new Person('Sara','Smith','Female');


console.log(john);
console.log(sara);




Person.prototype.sayHi = function() {
    return 'Hi from prototype!';
};

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
console.log(sara.sayHi());
console.log(sara.getFullName());


console.log(john.staticMethod());



// ONE FUN PROMISE :)

var isVivifyhappy = true;

var willIGetAJob = new Promise(
  function (resolve, reject) {
      if (isVivifyhappy) {
          var job = {
              position: 'Junior web dev',
              salary: 'just fine!'
          };
          resolve(job);
      } else {
          var reason = new Error('Vivify is not happy :(');
          reject(reason);
      }
  }
);

var askVivify = function() {
    willIGetAJob
        .then(function (fulfilled) {
            console.log(fulfilled);
        })
        .catch(function (error){
            console.log(error.message);
        })
};

askVivify();