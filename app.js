// ----------------------------------------------------------------------------------------------
// Abstract: Array Destructing with Objects
// ----------------------------------------------------------------------------------------------

// Notes: rest will use the rest in the object... and spread with add. 
// const teaOrder = {
//     variety     : 'oolong',
//     teaName     : 'winter sprout', 
//     origin      : 'taiwan',
//     price       : 12.99,
//     hasCaffeine : true, 
//     quantity    : 3,
// };

// const price = teaOrder.price; 
// const quantity = teaOrder.quantity; 
// const teaName = teaOrder.teaName;


// const { price, quantity, ...others } = teaOrder;
// // const { country } = teaOrder;

// const { brewTemp: temp = 175 } = teaOrder; 

// const { teaName: tea } = teaOrder; 

// function checkout(tea) {
//     const {quantity = 1, price} = tea;
//     return quantity * price;
// }

// checkout(teaOrder); 


// const order1 = {
//     variety     : 'green',
//     teaName     : 'silver needle', 
//     origin      : 'taiwan',
//     price       : 12.99,
//     hasCaffeine : true, 
// };

// ----------------------------------------------------------------------------------------------
// Abstract: Array Destructing with Arrays
// ----------------------------------------------------------------------------------------------
// const students = [
//     { name: 'Drake', gpa: 4.6},
//     { name: 'Henry', gpa: 4.4},
//     { name: 'Aaron', gpa: 4.0},
//     { name: 'Harry', gpa: 3.8},
//     { name: 'Ant', gpa: 3.2 },
// ];

// const [ topStudent, secondBest,, fourth ] = students; 
// const [ first, ...losers ] = students; 

// Destructuring functions - We can use destructuring to extract key/value pairs from an object into variables. 

// const order2 = {
//     variety     : 'green',
//     teaName     : 'silver needle', 
//     origin      : 'taiwan',
//     price       : 11.99,
//     hasCaffeine : true, 
//     quantity    : 4
// };

// function getTotal({quantity, price}) {
//     return quantity * price;
// }

// const actScoreResults = [ 'Jimmy', 'Jessica', 'Violet' ];
// const satScoreResults = [ 'Randy', 'Michael', 'Vinny' ];

// function getRankings([first, second, third]) {
//     return {
//         first,
//         second, 
//         third
//     };
// }
    
// *****************************************
// SWAPPING VARIABLES USING DESTRUCTURING
// *****************************************

let delicious = 'Mayonnaise';
let disgusting = 'Whipped Cream'; 

// let temp = delicious; 
// delicious = digusting; 
// disgusting = temp; 

// let both = [ delicious, disgusting ]; 
// [ disgusting, delicious ] = both; 

[ disgusting, delicious ] = [ delicious, disgusting ];


