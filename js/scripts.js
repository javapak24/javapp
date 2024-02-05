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


