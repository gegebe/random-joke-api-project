// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

button.addEventListener('click', function(){
    getRandomJoke();
})

function getRandomJoke(){
    const url = 'https://api.chucknorris.io/jokes/random'

    fetch(url).
    then(response => response.json()).
    then(data => updateDOM(data)).
    catch(error => console.log(error))

    // Fijaos que esto se ejecuta antes de recibir la respuesta del fetch!!
    console.log(jokeDIV.textContent)

}

function updateDOM(data) {
    jokeDIV.innerHTML = data.value
}

function onerror(){
     jokeDIV.textContent = 'There was an error!';  
}
