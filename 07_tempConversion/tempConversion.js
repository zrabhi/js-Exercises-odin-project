const ftoc = function(num) {
  let result = 0;;
  if(num)
  {
    result = ((num - 32) * 5) / 9;
  }
return result;
};

const ctof = function(num) {
  let result = 0;
  if(num)
  {
    result = ((num * 1.8) + 32);
  }
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
