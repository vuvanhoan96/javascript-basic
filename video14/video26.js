console.log('Hello world from HTML');

// Map vs For

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for( let i=0; i< arr.length; i++){
//     arr[i] = arr[i]*arr[i];
// }

let mapArr = arr.map((item, index) => {
    item*=item;
    return item;
});
console.log('check value arr: ', arr);
console.log('check value mapArr: ', mapArr);

// map sẽ tạo ra mảng mới và nó không thay đổi cái mảng cũ. hay nói cách kkhác: 
// là nó copy và tạo ra mảng mới.

// Cú pháp giống filter / find.
