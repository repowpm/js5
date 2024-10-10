import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";
import { fetchAnimal } from "./fetchData.js";


document.addEventListener("DOMContentLoaded", async() =>{

    const animalData = await fetchAnimal();
    const animalSelect = document.getElementById("animal");
    const animalAge = document.getElementById("edad");
    const animalComments = document.getElementById("comentarios");
    const registerBtn = document.getElementById("btnRegistrar");

    animalSelect.addEventListener("change", () =>{
        const animalName = animalSelect.value;
        const animalInfo = animalData.find((animal) => animal.name === animalName);
        if (animalInfo) {
            const animalPreview = document.getElementById("preview");
            animalPreview.innerHTML = `<img src="assets/imgs/${animalInfo.imagen}" alt="${animalInfo.name}"
            style="display: block; margin: 0 auto; width: 200px; height: 100%;">`
        };
    });


    registerBtn.addEventListener("click", () =>{
        const nombre = animalSelect.value;
        const edad =  animalAge.value;
        const comentarios = animalComments.value;
        const animalInfo = animalData.find((animal) => animal.name === nombre);
        if (animalInfo) {
            let animalToAdd;
            switch(nombre){
                case "Leon":
                    animalToAdd = new Leon(animalInfo.name, edad, animalInfo.imagen, comentarios, animalInfo.sonido);
                    break;
                case "Lobo":
                    animalToAdd = new Lobo(animalInfo.name, edad, animalInfo.imagen, comentarios, animalInfo.sonido);
                    break;
                case "Oso":
                    animalToAdd = new Oso(animalInfo.name, edad, animalInfo.imagen, comentarios, animalInfo.sonido);
                    break;
                case "Serpiente":
                    animalToAdd = new Serpiente(animalInfo.name, edad, animalInfo.imagen, comentarios, animalInfo.sonido);
                    break;
                case "Aguila":
                    animalToAdd = new Aguila(animalInfo.name, edad, animalInfo.imagen, comentarios, animalInfo.sonido);
                    break;
            };
            addAnimaltoTable(animalToAdd);
            animalSelect.selectedIndex = 0;
            animalAge.selectedIndex = 0; 
            animalComments.value = '';
            const animalPreview = document.getElementById("preview");
            animalPreview.innerHTML = '';
        };
    });

/**
 * Funcion encargada de crear y agregar card a la seccion de "Animales en investigacion"
 * @param {Object} animal 
 */
function addAnimaltoTable(animal) {
    const animalsResearch = document.getElementById("Animales");
    const animalCard = document.createElement("div");
    animalCard.className = "card m-2";
    animalCard.style = "width: 18rem;";
    animalCard.innerHTML = `
        <img src="assets/imgs/${animal.Img}" class="card-img-top animal-img" alt="${animal.Nombre}">
        <div class="card-body">
            <h5 class="card-title">${animal.Nombre}</h5>
            <p class="card-text">Edad: ${animal.Edad}</p>
            <p class="card-text">Comentarios: ${animal.Comentarios}</p>
            <div class="audio-container">
                <audio id="audio-${animal.Nombre}" src="assets/sounds/${animal.Sonido}"></audio>
                <button class="play-button">
                    <img src="assets/imgs/audio.svg" alt="Play" class="play-icon">
                </button>
            </div>
        </div>
    `;
    animalsResearch.appendChild(animalCard);
    const animalImage = animalCard.querySelector(".animal-img");
    const playButton = animalCard.querySelector('.play-button');


    animalImage.addEventListener("click", () => { openModal(animal)});

    playButton.addEventListener('click', () => {
        const audio = animalCard.querySelector('audio');
        audio.play(); 
    });
}

function openModal(animal) {
    const modalBody = document.querySelector("#exampleModal .modal-body");
    modalBody.innerHTML = `
        <img src="assets/imgs/${animal.Img}" alt="${animal.Nombre}" class="img-fluid" style="width: 100%;">
        <h5 class="mt-3">${animal.Nombre}</h5>
        <p><strong>Edad:</strong> ${animal.Edad}</p>
        <p><strong>Comentarios:</strong> ${animal.Comentarios}</p>
        <div class="audio-container">
            <audio id="modal-audio" src="assets/sounds/${animal.Sonido}"></audio>
            <button class="play-button">
                <img src="assets/imgs/audio.svg" alt="Play" class="play-icon">
            </button>
        </div>
    `;
    const playButton = modalBody.querySelector('.play-button');
    playButton.addEventListener('click', () => {
        const audio = modalBody.querySelector('audio');
        audio.play();
    });

    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}

});
