function reverseNumber(num){
    let result = 0;
    let digit;
    while (num !== 0) {
        digit = num % 10;
        result = (result * 10) + digit;
        num = (num - digit) / 10;
        
    }
    return result;
 }
 
console.log(reverseNumber(398));//893
console.log(reverseNumber(-746));//-647
console.log(reverseNumber(30000));//3
