export async function fetchAnimal(){
    const response = await fetch('animales.json');
    const data = await response.json();
    return data.animales
}