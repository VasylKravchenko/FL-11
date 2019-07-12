function isInteger(num) {
    if(num % 1 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isInteger(3)); //true
console.log(isInteger(3.1)); //false
