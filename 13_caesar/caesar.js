const caesar = function(str, s) {
    let result=""
    for (let i = 0; i < str.length; i++)
    {
        let char = str[i];
        if (char.toUpperCase(str[i]))
            result +=  String.fromCharCode((char.charCodeAt(0) + s - 65) % 26 + 65);
        else
            result += String.fromCharCode((char.charCodeAt(0) + s - 97) % 26 + 97);
    }
    return result;
}
// Do not edit below this line
module.exports = caesar;
