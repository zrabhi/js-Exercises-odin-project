const removeFromArray = function(arr, item) {
    let  i = 0;
    while(arr[i])
    {
        if(arr[i] === item)
        {
           arr.splice(i, 1);
        }
        i++;
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
