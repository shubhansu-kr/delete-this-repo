var name;
let number;

const address = [1, 2, 3];

address.push(21);

console.log(name, number, address);
// undefined undefined [1, 2, 3, 21];

// We are able to add elements to a constant array.
// But we cannot change the value if const is used with a variable.
// Since 