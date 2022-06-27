const repeatString = function(string, num) {
    let i = 0;
    var str = '';
    while(i < num)
    {
        str += string; 
        i++;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
