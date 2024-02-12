// height is in m
let pokemonRepo = (function (){

let pokemonList = [];
let pokiLink = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    console.log(pokemon.name);
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


pokemonRepo.getAll().forEach(function (pokemon){
    pokemonRepo.addListItem(pokemon);

});


