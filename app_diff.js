// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

async function getRandomJoke(){
  const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
  let datos = await respuesta.json();
  return datos.value;
}

button.addEventListener("click", async function(){
  jokeDIV.textContent = await getRandomJoke();
});