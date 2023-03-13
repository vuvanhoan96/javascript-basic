// Strings
// name'variable.length (propety)
// trim() - để xóa các dấu khoảng trắng ở đầu và cuối chuỗi khi dùng thuộc tính length.
// Dùng ` ` để khỏi lẫn lộn "" '' trong chuỗi.
let a ="Tôi là String - Chuỗi";
let text = `I'm Hoan`
console.log(a.trim().length);
console.log(text);


// Numbers

let x = 5;
let y = '5';

console.log(x+y, x-y, x/y, x*y, x%y);

// Ngoài phép cộng (+) thì các phép toán còn lại (-, *, /, %)
// kiểu String y = '5' sẽ cố convert - chuyển thành Numbers rồi nó mới thực hiện.

// Muốn chuyển từ String sang Number ta có 2 cách: 

let z = Number(y);
let o = +y;

console.log(z, o);