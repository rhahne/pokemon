
const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const axios   = require('axios');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + "/views/partials")
/*
axios.get("https://api.punkapi.com/v2/beers")
  .then( (response)=>{
  })
  .catch( (err) => {
    console.log(err)
  })
*/
/*
var pokemonList;

app.get('/allpokemons', (req, res) => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=20")
  .then( (listOfPokemon)=>{
    //res.render('allpokemons', {listOfPokemon});
    pokemonList = listOfPokemon;
    listOfPokemon.forEach(pokemon => {
    console.log(pokemon);
    });
  })
  .catch( (err) => {
    console.log(err)
  })
});

console.log(pokemonList);
*/
app.get('/allpokemons', (req, res) => {
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=100")
  .then( (listOfPokemon)=>{
    res.render('allpokemons', {listOfPokemon});
  })
  .catch( (err) => {
    console.log(err)
  })
});

app.get('/pokemon', (req, res) => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${req.query.pokemon}`)
  .then( (pokemonProps)=>{
    debugger
    res.render('pokemon', {pokemonProps});
  })
  .catch( (err) => {
    console.log(err)
  })
});
/*
axios.get("https://pokeapi.co/api/v2/pokemon/1")
.then( (pokemonProperties)=>{
  debugger
  res.render('index', {pokemonProperties});
})
.catch( (err) => {
  console.log(err)
})

app.get('/', (req, res) => {

});
/*
axios.get("https://pokeapi.co/api/v2/pokemon/1")
.then( (pokemonProperties)=>{
  res.render('allpokemons', {pokemonProperties});
})
.catch( (err) => {
  console.log(err)
})
*/

/*
app.get('/', (req, res) => {
  P.getPokemonByName('*') // with Promise
  .then(function(response) {
    res.render('index', {response});
  })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
});
/*
app.get('/beers', (req, res) => {
  punkAPI.getBeers()
  .then(beers => {
    res.render("beers", {beers})
  })
  .catch(error => {
    console.log(error)
  })
}); 

app.get('/random-beers', (req, res) => {
  punkAPI.getRandom()
  .then(beers => {
    res.render('randomBeer', {beers});
  })
  .catch(error => {
    console.log(error)
  })
}); 
*/
app.listen(3000);