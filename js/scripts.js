// height is in m
let pokemonRepo = (function (){

let pokemonList = [
    {
        name: 'Charizard',
        height: 1.7,
        type: ['fire', 'flying']
    },
    {
        name: 'Squirtle',
        height: .5,
        type: ['water']
    },
    {
        name: 'Pikachu',
        height: .4,
        type: ['electric']
    }
];

function add(item){
    pokemonList.push(item);
}

function getAll() {
return pokemonList;
}

function addListItem(pokemon) {
    let pokiList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let pokemonButton = document.createElement("button");
    pokemonButton.innerText = pokemon.name;
    pokemonButton.classList.add("button-class");
    listPokemon.appendChild(pokemonButton);
    pokiList.appendChild(listPokemon);
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


