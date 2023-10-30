// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

async function getRandomJoke(){
  const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
  //console.log("Chiste random: " + respuesta);

  let datos = await respuesta.json();
  //console.log(datos);

  // return datos;
  jokeDIV.textContent = datos.value;
}

button.addEventListener("click", getRandomJoke);


// button.addEventListener("click", async function(){
//   jokeDIV.textContent = await getRandomJoke();
// });