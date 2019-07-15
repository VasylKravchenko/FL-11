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

//task8
function getAmountOfAdultPeople(data) {
    let today = new Date();
    const daysPerYear = 365;
    const ageAdult = 18;
    return filterArray(data, function (data) {
        let bDay = new Date(data.birthday);
        return daysBetween(bDay, today) / daysPerYear > ageAdult
    }).length;
}

let inputData = [
    {
      '_id': '5b5e3168c6bf40f2c1235cd6',
      'index': 0,
      'birthday': '2016-03-18T00:00:00',
      'eyeColor': 'green',
      'name': 'Stein',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e3168e328c0d72e4f27d8',
      'index': 1,
      'birthday': '1991-02-11T00:00:00',
      'eyeColor': 'blue',
      'name': 'Cortez',
      'favoriteFruit': 'strawberry'
    },
    {
      '_id': '5b5e3168cc79132b631c666a',
      'index': 2,
      'birthday': '1984-04-17T00:00:00',
      'eyeColor': 'blue',
      'name': 'Suzette',
      'favoriteFruit': 'apple'
    },
    {
      '_id': '5b5e31682093adcc6cd0dde5',
      'index': 3,
      'birthday': '1994-04-17T00:00:00',
      'eyeColor': 'green',
      'name': 'George',
      'favoriteFruit': 'banana'
    }
];

console.log(getAmountOfAdultPeople(inputData));

//task9
function keys(data) {
    let keyArr = [];
    for (let key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
            keyArr.push(key);
        }
    }
    return keyArr;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));

//task10
function values(data) {
    let valueArr = [];
    for (let key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
            valueArr.push(data[key]);
        }
    }
    return valueArr;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
