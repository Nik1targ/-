let currentTree = {
  type: "",
  garland: "",
  toys: [],

  setTree(newType) {
    this.type = newType;
  },

  setGarland(newGarland) {
    this.garland = newGarland;
  },

  addToy(toyObj) {
    this.toys.push(toyObj);
  },

  showInfo() {
    console.log("Ёлка:", this.type);
    console.log("Гирлянда:", this.garland);
    console.log("Игрушки:", this.toys);
  }
};





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

toyBox.appendChild(img);
toyBox.appendChild(countBox);

toysGrid.appendChild(toyBox);


img.addEventListener("dragstart", e => {
    if (toy.count === 0) {
        e.preventDefault();
        return;
    }
    e.dataTransfer.setData("toy", index);

})


});


const treeAria = document.querySelector(".tree-area");

treeAria.addEventListener("dragover", e => e.preventDefault());

treeAria.addEventListener("drop", e => {
    e.preventDefault();
})


const treeArea = document.querySelector(".tree-area");

treeArea.addEventListener("dragover", e => e.preventDefault());

treeArea.addEventListener("drop", e => {
  e.preventDefault();

  const rect = treeArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (e.dataTransfer.getData("toy") !== "") {
    const toyIndex = e.dataTransfer.getData("toy");
    const toy = toys[toyIndex];

    if (toy.count > 0) {
      toy.count--;

      const xPos = x - 40;
      const yPos = y - 40;

      placedCounter++;
      const placedId = placedCounter;

      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left = xPos + "px";
      img.style.top = yPos + "px";

      // сохраняем id в DOM
      img.dataset.placedId = placedId;

      treeArea.appendChild(img);

      // сохраняем в объект текущей ёлки
      currentTree.addToy({
        id: toy.id,
        placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      console.log('currentTree.toys:', currentTree.toys);
      

      toysGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click", () => {
        console.log("Клик по игрушке", img.dataset.placedId);

        img.remove();

        toy.count++;
        toysGrid.children[toyIndex].children[1].textContent = toy.count;

        currentTree.toys = currentTree.toys.filter(
          t => t.placedId != img.dataset.placedId // удалить игрушку
        );
      });
    }
  }

  if (e.dataTransfer.getData("garland") !== "") {
    const gIndex = e.dataTransfer.getData("garland");
    const garland = garlands[gIndex];

    currentTree.setGarland(garland.type);

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland-on-tree");

    img.style.left = (x - 140) + "px";
    img.style.top = (y - 20) + "px";

    img.style.animationDelay = (Math.random() * 1.6) + "s";

    treeArea.appendChild(img);
    
    //при клике на гирлянду удаляем ее из DOM
     img.addEventListener("click", () => {
      img.remove();
      // удаляем гирлянду из объекта текущей ёлки
      currentTree.setGarland("");
    });
  }
});






const speakerBtn = document.getElementById("speaker-btn");
const audio = document.getElementById("xmas-audio");

let musicOn = false;

speakerBtn.addEventListener("click", () => {
  if (!musicOn) {
    audio.play();
    musicOn = true;
    speakerBtn.classList.add("sound-on");
  } else {
    audio.pause();
    musicOn = false;
    speakerBtn.classList.remove("sound-on");
  }
});



