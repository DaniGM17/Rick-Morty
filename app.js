const urlBase = 'https://rickandmortyapi.com/api';
let urlCharacters = `${urlBase}/character`;
const btnLoad = document.querySelector('#load');

const pintaCard = (personaje) => {
    const div = document.createElement('div');
    div.innerHTML = `<div class="card" style="width: 18rem;">
    <img src="${personaje.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${personaje.name}</h5>
      <p class="card-text">${personaje.status}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`;
    return div;
}

const loadData = (e) => {
    e.preventDefault();
    const page = prompt('¿Qué página quieres ver?');
    urlCharacters += `?page=${page}`;
    fetch(urlCharacters)
        .then(respuesta => {
            console.log((respuesta));
            return respuesta.json();
        })
        .then(respJson => {
            const listaPersonajes = respJson.results;
            const contenedorCards = document.querySelector('#cards');
            limpiaDiv();
            listaPersonajes.forEach(personaje => {
                //const li = document.createElement('li');
                //li.innerHTML = `<img src='${personaje.image}'>`;
                contenedorCards.appendChild(pintaCard(personaje));
            });
        });
}

const limpiaDiv = () => {
    const contenedorCards = document.querySelector('#cards');
    while(contenedorCards.firstChild){
        contenedorCards.removeChild(contenedorCards.firstChild);
    }
}
btnLoad.addEventListener('click', loadData);
//Fetch consulta
//Respuesta objeto response después de la petición
//.then ejecutar despues de la acción anterior.
