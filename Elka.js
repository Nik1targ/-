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



let nams = [1,2,3];
let newNums = nams.map(n => n+1);

console.log(newNums);



let namz = [1,2,3];
let newNumz = namz.map(n => n+5);

console.log(newNumz);


let namms = [1,78, -7, 2,37,4,5,6,10,32];

let even = namms.filter(n => n > 10);

console.log(even);



let boxes = [
    {weight: 2, label: "Легкая"},
    {weight: 5, label: "Средняя"},
    {weight: 12, label: "Тяжелая"},
    {weight: 15, label: "Очень тяжелая"}
];

let heavyBox = boxes.find(box => box.weight >10);

console.log(heavyBox);




let innerPlanets = ["Меркурий","Венера","Земля","Марс"];
let outerPlanets = ["юпитер","Сатурн","Уран","Нептун"];

let allPlanets = innerPlanets.concat(outerPlanets);
console.log(allPlanets);