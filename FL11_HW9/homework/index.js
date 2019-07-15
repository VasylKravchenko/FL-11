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
function executeForEach (arr, func) {
    for(const i of arr) {
        func(i)
    }
}

//task3
function mapArray(arr, func) {
    let newArr = [];
    executeForEach(arr, function (arr) {
        newArr.push(func(arr));
        });
    return newArr;
}

console.log(mapArray([2, 5, 8], function(el){
    return el + 3;
}));

//task4
function filterArray(arr, func) {
    let newArr = [];
    executeForEach(arr, function (arr) {
        if (func(arr)) {
            newArr.push(arr);
        }
    });
    return newArr;
}

console.log(filterArray([2, 5, 8], function(el){
    return el > 3;
}));

//task5
function showFormattedDate(date) {
    const monthDay = date.toLocaleString('en-Us', {month: 'short', day: 'numeric'});
    const year = date.toLocaleString('en-Us', {year: 'numeric'});
    return `Date: ${monthDay} ${year}`
}

console.log(showFormattedDate(new Date('2019-07-15T06:20:00')));

//task6
function canConvertToDate(date) {
    if (Date.parse(date)) {
        return true;
    } else {
        return false;
    }
}

console.log(canConvertToDate('2016-13-18T00:00:00')) // false
console.log(canConvertToDate('2016-03-18T00:00:00')) // true

//task7
function daysBetween(date1, date2) {
    const msPerDay = 86400000;
    const msDiff = date2.getTime() - date1.getTime();
    const days = Math.round(msDiff/msPerDay);
    return Math.abs(days)
}

console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));
