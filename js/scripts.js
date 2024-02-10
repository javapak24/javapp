// height is in m
let pokemonRepo = (function (){

let pokemonList = [];
let pokiLink = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

function add(item){
    pokemonList.push(item);
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
 addListItem: addListItem
};

})();


pokemonRepo.getAll().forEach(function (pokemon){
    pokemonRepo.addListItem(pokemon);

});


