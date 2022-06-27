const add = function(num1, num2) {
  let result = 0;
  if(num1 && num2)
    result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
  let result = 0;
  if(num1 && num2)
  {
    result = num1 - num2;
  }
	return result;
};

const sum = function([num1, num2]) {
  var str = [num1 + num2];
	return str;
};

const multiply = function(num1, num2) {
    let result = 0;
    if(num1 && num2)
    {
      result = num1 * num2;
    }
    return result;
};

const power = function(num1, num2) {
	let i = 0;
  let result = 0;
  while( i < num2)
  {
    result = num1 * num2;
    i++;
  }
  return result;
};

const factorial = function(num) {
  let i = 0;
  let result = 0;
  while(i < num)
  {
    result = result * num;
    i++;
  }
	return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
