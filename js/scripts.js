// height is in m

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

function poki(pokemon) {
document.write(pokemon.name + ' ( height: ' + pokemon.height + ' ) ');
if(pokemon.height > 1.0) {
    document.write('That\'s a big Pokemon!');
    document.write('<br>');
}
else{
    document.write('<br>');
}
}
