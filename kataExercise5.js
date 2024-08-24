//Write a function that removes the spaces from the string, then return the resultant string.

var removeStringSpaces=(string)=>{
    return string.replace(/\s+/g, '');

}

console.log(removeStringSpaces("Testing my String"))