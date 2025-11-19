let numbers = [10,20,30];

for (let i=0; i < numbers.length; i++){
    console.log(numbers[i]);
}


let fruits = ["яблоко","кабан","груша"];

for (let fruit of fruits) {
    console.log(fruit);
}

let students = [
    {name:"Anna", age: 15},
    {name:"Igor", age: 16}
];

for (let student of students) {
    console.log(student.name);
}

let pets = ["kot","pec","popygai"];

console.log(pets.includes("pec"));
console.log(pets.includes("homak"));


let nums = [10,20,30,40];
let part = nums.slice(1,3);

console.log(part);
console.log(nums);


let numss = [10,20,30,40,50];

let removed = numss.splice(1,2);

console.log(numss);
console.log(removed);
