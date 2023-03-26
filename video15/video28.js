console.log('Hello world from HTML');

// sort array
// Default: sort will convert elements of array into strings and sort from A to Z
const arr =[1, 21, 1000, 4, 31];
// 1, 1000, 21, 31, 4
arr.sort();
console.log(arr);

// sort up order

arr.sort((item1, item2) => item1-item2);
console.log(arr);

// or

let sortUp = (a, b) => {
    return a - b;
}

arr.sort(sortUp);
console.log(arr);