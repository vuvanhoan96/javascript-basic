// Template String ${}
// Dấu backticks- ``
let a = 5;
let b = 5;

console.log(`Gia tri cua a = ${a} b = ${b} a+b = ${a + b}`);

// Object 

let obj = {
    name: 'Hoan', // key: name, address.
    address: 'Thanh Hoa' // value: Hoan, Thanh Hoa
}; // Object

console.log(`What's your name ? My name's`, obj.name);

console.log(`What's your name ? My name's`, obj['name']);

// Muốn thay đổi value của 1 key thì ta có :

let x = 'name';

obj.name= 'Kien';
obj[x]= 'Kien';

//
let y = ''; // String 