// *** Closure ***
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

var twice = multiplier(2);
console.log(twice(5));
// → 10

//Thinking about programs like this takes some practice.
// A good mental model is to think of the function keyword as “freezing”
// the code in its body and wrapping it into a package (the function value).
// So when you read return function(...) {...},
// think of it as returning a handle to a piece of computation,
// frozen for later use.

// *** RECURSION ***
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));
// → 8
// About 10x cheaper to have a for loop than to call functions recursively
