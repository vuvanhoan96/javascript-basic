console.log('Hello world from HTML');

// Callback, set timeout, setInterval

let sum = (a, b, callback) => {
    let tong = a + b;
    setTimeout(() => {
    callback(tong);
    }, 5000)
}
// milisecond
// Bên trong setTimeout là 1 arrow function.

let printSum = (message) => {
    console.log(' sum: a + b = ', message);
}
sum(9, 6, printSum);

// Filter / Find

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let arr = [
    {name: 'Hoan', age: 19},
    {name: 'Kien', age: 59},
    {name: 'Khang', age: 19},
    {name: 'Duy', age: 29},
    {name: 'Khanh', age: 30}
]
let filter = arr.filter((item, index)=> {
    return item && item.age === 19;
});
// let filter = arr.find((item)=> {
//     return item && item.age === 19;
// });
console.log(filter);

// filter create a new array
// find retrun a first element (correct condition) in a array.
