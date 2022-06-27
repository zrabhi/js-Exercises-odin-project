const palindromes = function (str) {
    let x = 0;
    let y = 0;
    let j = str.lenght -1;
    for(let i = 0; i < j / 2 ; i++)
    {
        x = str[i];
        y = str [j - i];
        if( x != j)
            return false;
    } 
    return true;
};

// Do not edit below this line
module.exports = palindromes;
