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


let words = ["Я","люблю","JS"];

let sentence = words.join(" ");
console.log(sentence);




// let toys = ["шар","звезда","колокольчик"];

// let list = toys.join(", ");
// console.log(list);



let toyString= "шар,звезда,колокольчик";

let toyz = toyString.split(", ");
console.log(toyz);


let toys = [
    {
        name:"Большой шар с рисунком Цветок",
        count:2,
        year:1960,
        shape:"шар",
        color:"Желтый",
        size:"большой",
        favorite:false,
        image: "./images/toy_red.png" 
    },
    {
        name:"Зеленый шар с цветочным узором",
        count: 5,
        year: 2000,
        shape: "шар",
        color: "зеленый",
        size: "большой",
        favorite: false,
        image: "./images/toy_red.png" 
    },
    {
        name:" Крастный шар с напыление",
        count:2,
        year:1960,
        shape:"шар",
        color:"Желтый",
        size:"большой",
        favorite:false,
        image: "./images/toy_red.png" 
    },
    {
        name:"Большой шар с рисунком Цветок",
        count:2,
        year:1960,
        shape:"шар",
        color:"Желтый",
        size:"большой",
        favorite:false,
        image: "./images/toy_red.png" 
    },
    {
        name:"Зеленый шар с цветочным узором",
        count: 5,
        year: 2000,
        shape: "шар",
        color: "зеленый",
        size: "большой",
        favorite: false,
        image: "./images/toy_red.png" 
    },
    {
        name:" Крастный шар с напыление",
        count:2,
        year:1960,
        shape:"шар",
        color:"Желтый",
        size:"большой",
        favorite:false,
        image: "./images/toy_red.png" 
    },
]


toys.forEach(toy => {
    console.log(
        toy.name + 
        " - " + 
        toy.color + 
        ", форма:" +
        toy.shape + 
        ", колличество:" +
        toy.count
    );
});


let updateToys = toys.map(toy =>{
    return {
        ...toy,
        count:toy.count + 1
    };
});

console.log(updateToys);



const toysGrid = document.querySelector(".toys-grid");

toys.forEach((toy, index) => {

const toyBox = document.createElement("div");
const img = document.createElement("img");
img.src = toy.image;
img.classList.add("toy");
img.draggable= true;
img.dataset.index = index;

const countBox = document.createElement("div");
countBox.textContent = toy.count;
countBox.style.color = "white";
countBox.style.textAlign = "center";
countBox.style.fontSize = "14px";

});


