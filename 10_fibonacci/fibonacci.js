const fibonacci = function(num) {
     num-=1;
    var a = 1, b = 0, temp;
    let i = 0;
    while (i <= num)
    {
      temp = a;
      a = a + b;
      b = temp;
      i++;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
