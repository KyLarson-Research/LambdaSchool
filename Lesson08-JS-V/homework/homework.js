// Do not change any of the function names

function createUserClass() {
  // create an ES6 class or a constructor function called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the class
	function user(username, name, email){
		this.username = username;
		this.name = name;
		this.email = email;
		this.sayHi = function(){
			var greeting = 'Hello, my name is ' + this.name;
			return greeting;
		};
	}
	return user('test','testtommy', 'testtommy@test.com');
}

function addPrototypeMethod(Constructor) {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
	Constructor.prototype.sayHi = function(){
		return 'Hello World!';
	};
}

function addReverseString() {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
	function String(){
		arguments.prototype.reverse = function(){
			var reversed = '';
			for (let i=0; i<this.length; i++){
				reversed.unshift(this[i]);
			}
			return reversed;
		};
	}
	return (arguments+String(arguments));
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  createUserClass,
  addPrototypeMethod,
  addReverseString,
};
