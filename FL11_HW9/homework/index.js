//task0
function getNumbers(str) {
    let numsArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 1 === 0) {
            numsArr.push(+str[i]);
        }
    }
    return numsArr;
}

console.log(getNumbers('djf23ju34-2j3'));

//task1
function findTypes() {
    let typeStore = {};
    for (let i of arguments) {
        if (typeStore.hasOwnProperty(typeof i)) {
            typeStore[typeof i] += 1;
        } else {
            typeStore[typeof i] = 1;
        }
    }
    return typeStore;
}

console.log(findTypes(null, true, 0, NaN, false, 'hello'));

//task2
