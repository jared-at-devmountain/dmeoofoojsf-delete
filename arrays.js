/*
    In this file, we'll be making a new story
    about Doug, the Pokemon trainer.
*/

//Doug wants to be a pokemon trainer
//His mom gives him a backpack full of handy items,
//and kicks him out of her house
let backpack = [
    'poke ball', 'poke ball', 
    'potion', 'beef jerky', 'running shoes'
]

let pokemon = []

//Doug wants more snacks than just beef jerky
//he goes to the store and buys two packs of Oreos
backpack.push('oreos')
backpack.push('oreos')

console.log('after buying oreos, this is our backpack:')
console.log(backpack)

//Doug meets professor Oak at the store
//Oak sees his potential and gives him a pokedex and a pikachu
backpack.push('pokedex')
pokemon.push('pikachu')

console.log('after meeting professor oak, our backpack and pokemon are:')
console.log(backpack)
console.log(pokemon)

//Doug goes out into the wild, into the tall grass in the forest
//And throughout the day, he encounters four pidgeys
//and catches them all
//he miraculously happens to find a pokeball on the ground with each pidgey encounter
for (let i = 0; i < 4; i++) {
    pokemon.push('pidgey')
}

console.log('after the pidgeys, our pokemon are now:')
console.log(pokemon)

//Doug gives away his running shoes to a poor, young, barefooted trainer
//He also eats all the food in his backpack
//splice out the food and shoes in Doug's backpack
backpack.splice(3,4)

console.log('after the binge and the giveaway, backpack is now:')
console.log(backpack)

//we encounter a new pokemon, Charizard
let newPokemon = 'Charizard'

//we get VERY lucky and catch it without incident on our first try
pokemon.push(newPokemon)

console.log('after catching charizard, our pokemon are now:')
console.log(pokemon)

//someone asks to see your cutest pokemon.
//which is pikachu, duh
//so you show them pikachu
console.log('here is my pikachu!')
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

//a geneticist crosses your path, and asks if he can clone your
//pidgeys, for science.
//you agree, if he'll give you the lead statue of a jynx he is currently holding
let clonedPidgeys = pokemon.slice(1,5)
console.log('here are your cloned pidgeys')
console.log(clonedPidgeys)

//let's make sure your pokemon stayed the same (no pidgeys were lost)
console.log('checking to make sure my pokemon are all still here:')
console.log(pokemon)

backpack.unshift('jynx statue')
console.log('backpack after adding the statue:')
console.log(backpack)

//you continue on your journey,
//but your backpack is so heavy
//that you decide you are going to ditch your statue in the woods
//it was kind of weird anyway
backpack.shift()

console.log('backpack after getting rid of the statue:')
console.log(backpack)

//you find a wild butterfree
//which is your favorite pokemon!
//you use up one pokeball to catch it
//however, once you've caught it, you realize you have 7
//pokemon, which is illegal
//you're really hungy anyway, so you decide eat one of your pidgeys

//make a variable for butterfree
//cut out a pokeball using any array method
//splice out pidgey and put in butterfree where the pidgey was at
//save the new spliced array (with pidgey in it) to a variable called lunch
let favePokemon = 'butterfree'
backpack.shift()
let lunch = pokemon.splice(3, 1, favePokemon)

console.log('here is my backpack after catching butterfree:')
console.log(backpack)
console.log('and here are my pokemon:')
console.log(pokemon)
console.log('and here is my lunch:')
console.log(lunch)

//you're walking along, and you stumble upon a rare stone called the 'pidgey-stone'
//that immediately causes all of your pidgeys to evolve into pidgeotto

//loop through all of your pokemon:
//if the pokemon you are currently looking at in the loop is a pidgey
//replace it's value in the array with 'pidgeotto'
for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i] === 'pidgey') {
        pokemon[i] = 'pidgeotto'
    }
}

console.log('after the evolution event, my pokemon are now:')
console.log(pokemon)