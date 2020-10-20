// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
	function fact(x){
		if(x===0){return 1;}
		return x*fact(x-1);
	}
	return fact(n);
}

function nFibonacci(n) {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
	/*function wrapValue(t){
		let local = t;
		return () => local;
	}*/
	function fib(j){
		if(j < 0) {return 0;}
		if(j === 0) {return 1;}
		if(j > 0) {
			var sum = fib(j-1)+fib(j-2);
			return sum;
		}
	}
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};
