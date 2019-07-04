let a1 = +prompt('enter Ax');
let a2 = +prompt('enter Ay');
let b1 = +prompt('enter Bx');
let b2 = +prompt('enter By');
let c1 = +prompt('enter Cx');
let c2 = +prompt('enter Cy');

const divider = 2;

if ((a1+b1)/divider === c1 && (a2+b2)/divider === c2) {
    console.log('true');
} else {
    console.log('false on');
}