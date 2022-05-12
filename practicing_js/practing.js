// var animals = [
//     {name: 'fluffykins', species: 'rabbit'},
//     {name: 'Caro', species:'dog'},
//     {name: 'Hamilton', species:'dog'},
//     {name: 'Harold', species:'fish'},
//     {name: 'Ursula', species: 'Cat'},
//     {name: 'Jimmy', species:'fish'}
// ];

// FILTER
// let dogs1 = animals.filter(function(animal){
//     return animal.species === "dog";
// });

// let dogs2 = animals.filter(animal => animal.species === "dog");

// console.log(dogs1, dogs2);


// MAP
// map out the array of names

// let animalNames = animals.map(animal => animal.name);
// console.log(animalNames);

// REDUCE

// let orders = [
    //     {amount: 250},
    //     {amount: 400},
    //     {amount: 100},
    //     {amount: 325}
    // ]
    
    // let ordersAmount = orders.reduce((sum, order) => {
//     return sum + order.amount
// }, 0);
// console.log(ordersAmount);

// ADVANCED REDUCE FUNCTION

// const fs = require('fs');

// var output = fs.readFileSync('data.txt', 'utf8')
// .trim()
// .split('\n')
// .map(line =>line.split("\t"))

// console.log('output', output);

// let countDownFrom = (num) =>{
//     if(num === 0) return;
//     console.log(num)
//     countDownFrom(num - 1)
// }

// console.log(countDownFrom(10))


// let categories = [
//     {id: 'animals', 'parent': null},
//     {id: 'mammals', 'parent':'animals'},
//     {id: 'cats', 'parent': 'mammals'},
//     {id: 'dogs', 'parent':'mammals'},
//     {id: 'chihuahua', 'parent':'dogs'},
//     {id: 'labrador', 'parent': 'dogs'},
//     {id: 'persian', 'parent': 'cats'},
//     {id: 'siamese', 'parent': 'cat'}
// ]

// let makeTree = (categories, parent) => {
//    let node = {}
//    categories
//     .filter(c => c.parent === parent)
//     .forEach(c => {
//         node[c.id] = makeTree(categories, c.id)
//     });
   
//     return node
// }

// console.log(
//     JSON.stringify(
//         makeTree(categories, null)
//         , null, 2)
//     )


// import loadImage from './load_image'

// let addImg = (src) =>{
//     let imgElement = document.createElement("img")
//     imgElement.src = src
//     document.body.appendChild(imgElement)
// }

// Promise.all([
//     loadImage("image/cats1.avif"),
//     loadImage("image/cat2.jpg"),
//     loadImage("image/cat3.jpg")
// ]).then((image) =>{
//     console.log(image);
// })

// function plusOne(value){
//     if(Array.isArray(value)){
//         let newArray = [];
//         for( let i = 0; i < value.length; i++){
//             newArray[i] = value[i] + 1;
//         }
//         return newArray;
//     }

//     return value[i] + 1;
// }

// console.log(plusOne([5, 6]));

function stringFunctor(value, fn){
    let chars = value.split("")

    return chars.map(function(char){
        return String.fromCharCode(fn(char.charCodeAt(0)))
    }).join("")


}

function plusOne(value){
    return value + 1;
}

function minusOne(value){
    return value - 1;
}

console.log([10, 15].map(plusOne));

console.log(stringFunctor("BFJ", plusOne));