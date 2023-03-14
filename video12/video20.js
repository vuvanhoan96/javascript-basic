console.log('Hello world from HTML');

// Functions
// (input parameter) - tham so dau vao
function sum(a,b){
    return a + b;
}

console.log('sum a + b = ', sum(9, 6));

let c = sum(10, 20);

console.log('sum c: ', c);

// Arrow function

// function like as a variable
let sum2 = (a, b) => {
    return a + b;
}

console.log(' check sum: ', sum2(9, 6));

// Phân biệt Function vs Method

let obj = {
    name: 'Hoan',
    address: 'Thanh Hoa',
    getName: function(){
        return this.name;
    }
}

console.log('>> get name obj: ', obj.getName());