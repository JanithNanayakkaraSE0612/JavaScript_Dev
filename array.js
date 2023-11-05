let fruits = ["apple","orange","banana","mango"];

console.log(fruits);

console.log(fruits[0]);

//fruits.push("mango");
//fruits.pop();
/*fruits.unshift("Coconut");
fruits.shift();*/



console.log(fruits[3]);


console.log(fruits);

let numOfFruits = fruits.length;
let index = fruits.indexOf("apple");

console.log(numOfFruits);
console.log(index);

for(let i = 1 ; i<fruits.length;i+=2){
    console.log(fruits[i]);
}