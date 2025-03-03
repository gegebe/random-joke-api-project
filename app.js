// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

//Las peticiones GET tardan x ms, por tanto ponemos await
async function getRandomJoke(){

  //1. Obtener datos de la API
  const respuesta = await fetch("https://api.chucknorris.io/jokes/random");

  // 2. Transformarlos en algo que pueda manipular con JS (objeto, array, array de objetos)
  let datos = await respuesta.json();

  //3. Actualizar el DOM
  jokeDIV.textContent = datos.value;
  
}

button.addEventListener("click", getRandomJoke);