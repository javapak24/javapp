// height is in m
let pokemonRepo = (function (){

let pokemonList = [];
let pokiLink = "https://pokeapi.co/api/v2/pokemon/?limit=15";

let modalContainer = document.querySelector("#modal-container");
modalContainer.classList.add("modal-container");

function showModal (title, text, img) {
    modalContainer.innerHTML=" ";
    let modal = document.createElement("div");
    modal.classList.add("modal");
    
    let closeButton = document.createElement("button");
    closeButton.classList.add("modal-close");
    closeButton.innerText= "Close";
    closeButton.addEventListener('click', hideModal);
    
    let titleElement = document.createElement('h1');
    titleElement.innerText = title;
    
    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let imageElement = document.createElement('img');
    imageElement.setAttribute("src", img);
    imageElement.setAttribute("width", "304");
    imageElement.setAttribute("height", "228");
    imageElement.setAttribute("alt", "pokemon portrait");
    
    modal.appendChild(closeButton);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);
    
    modalContainer.classList.add("is-visible");
};
    
function hideModal (){
    modalContainer.classList.remove("is-visible");    
};
    
window.addEventListener('keydown', (e) => {
    if(e.key===ESC && modalContainer.classList.contains("is-visible")){
        hideModal();
    }
});
    
modalContainer.addEventListener('click', (e)=> {
    let target = e.target;
    if(target===modalContainer){
    hideModal()
    }
});


function add(item){
    pokemonList.push(item);
}

function loadList() {
    return fetch(pokiLink).then(function (response){
        return response.json();
    }).then(function (json){
        json.results.forEach(function (item){
            let pokemon = {
                name : item.name,
                detailsURL : item.url
            };
            add(pokemon);
        });
    }).catch(function(e){
        console.error(e);
    })
}

function loadDetails(item) {
    let url = item.detailsURL;
    return fetch(url).then(function (response){
        return response.json();
    }).then(function(details){
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.type = details.types;
    }).catch(function(e){
        console.error(e);
    });
}

function getAll() {
return pokemonList;
}


function showDetails(pokemon) {
    loadDetails(pokemon).then(function(){
    showModal(pokemon.name, pokemon.height, pokemon.imageUrl);
});
}

function addListItem(pokemon) {
    let pokiList = document.querySelector(".pokemon-list");
    let liPokemon = document.createElement("li");
    let pokemonButton = document.createElement("button");
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add("button-class");
    liPokemon.appendChild(pokemonButton);
    pokiList.appendChild(liPokemon);
    pokemonButton.addEventListener('click', () => {
        showDetails(pokemon);
    });
}

return {
 add: add,
 getAll: getAll,
 addListItem: addListItem,
 loadList: loadList,
 loadDetails: loadDetails,
 showDetails: showDetails
};

})();

pokemonRepo.loadList().then(function() {
    pokemonRepo.getAll().forEach(function (pokemon){
        pokemonRepo.addListItem(pokemon);
    });
});


