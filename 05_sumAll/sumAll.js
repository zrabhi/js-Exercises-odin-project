const sumAll = function(num, addnum) {
    let result = 0;
    while(num <= addnum)
    {
        result = result + num;
        num++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
