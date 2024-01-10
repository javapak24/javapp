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

for (let i=0; i<pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ');
    if (pokemonList[i].height <= 1.0) {
    document.write('<br>');
    }
    else{
        document.write('That\'s a big pokemon!');
        document.write('<br>');
    }
    }
