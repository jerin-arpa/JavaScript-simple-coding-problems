const result = Math.pow(3, 2);
console.log(result);

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
console.log(gap);

if (gap < 5) {
    console.log('you guys can be friend');
}
else {
    console.log('you guys stay apart');
}


// round up
const number = 2.4598;
const fullNumber = Math.round(number);
console.log(fullNumber);

// ceil of number (2.0001 converted to 3)
const result2 = Math.ceil(2.00001);
console.log('ceil of 2.00001:', result2);

// floor of number (2.0001 converted to 2)
const result3 = Math.floor(2.00001);
console.log('floor of 2.00001:', result3);

// Random (0 to 1)
console.log(Math.random());

// Random (1 to 100)
const random = Math.round(Math.random() * 100);
console.log(random);

// Random 1 to 6
for (let i = 1; i <= 10; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}