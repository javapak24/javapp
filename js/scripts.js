// height is in m
let pokemonRepo = (function (){

let pokemonList = [];
let pokiLink = "https://pokeapi.co/api/v2/pokemon/?limit=100";

let modal = document.querySelector('.modal');

function showModal (pokemon) {
    let modalBody = document.querySelector('.modal-body');
    let modalTitle = document.querySelector('.modal-title');
    let modalHeader = document.querySelector('.modal-header');

    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>"+ pokemon.name + "</h1>");
    let imageElement = $("<img class = 'modal-img' style ='width:50%'");
    imageElement.attr("src", pokemon.imageUrl);
    let heightElement = $("<h1>"+ "height: " + pokemon.height + "</h1>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
};
    
function hideModal (){
    modal.classList.remove("is-visible");    
};
    
window.addEventListener('keydown', (e) => {
    if(e.key===ESC && modal.classList.contains("is-visible")){
        hideModal();
    }
});
    
modalContainer.addEventListener('click', (e)=> {
    let target = e.target;
    if(target===modal){
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
    pokemonButton.classList.add("btn");
    pokemonButton.setAttribute('data-target', '#exampleModal');
    pokemonButton.setAttribute('data-toggle','modal');

    liPokemon.classList.add("list-group-item");
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


