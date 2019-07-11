function isInteger(num) {
    return (num ^ 0) === num;
}
console.log(isInteger(3)); //true
console.log(isInteger(3.1)); //false