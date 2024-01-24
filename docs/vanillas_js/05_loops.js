// for
let i=0;
i<10;
i++
for (let i=0; i<10; i++){
}

// 리터럴 방식(리스트 사용) 기본 구문
let list = []
for (let param of list) {
}

// learning after object
const animals_array = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" }
];

for (let animal_object of animals_array) {
    console.log(animal_object);
}