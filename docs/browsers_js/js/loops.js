// learning after object
const animals_array = [
    { name: "dog", species: "canine" },
    { name: "cat", species: "feline" },
    { name: "bird", species: "avian" },
    { name: "fish", species: "aquatic" },
    { name: "lizard", species: "reptile" }
];

let animal_list = "";
for (let animal_object of animals_array){
    animal_list = `${animal_list}<tr><td>${animal_object["name"]}</td>
    <td>${animal_object["species"]}</td></tr>`;
}

let animals_element = document.querySelector("#animals_array_id")
animals_element.innerHTML = animal_list;
