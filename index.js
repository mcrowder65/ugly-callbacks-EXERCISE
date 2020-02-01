const utilities = require("./utilities")

function getNames(breeds) {
  return breeds.map(breed => breed.name)
}

function getBreed(breed) {
  return function(names) {
    return names.find(name => name === breed) || "Not Found"
  }
}

function getDog(breed) {
  return utilities
    .getDogBreeds()
    .then(getNames)
    .then(getBreed(breed))
}

function getCat(breed) {
  return utilities
    .getCatBreeds()
    .then(getNames)
    .then(getBreed(breed))
}

function getHamster(breed) {
  return utilities
    .getHamsters()
    .then(getNames)
    .then(getBreed(breed))
}
// Use the getHamster method to determine what the best pet is among the
// cat, dog, and hamster that you have found in the your respective lists
// using utilities.getBestPet(dog, cat, hamster)

getDog("Corgi")
  .then(dog => {
    return getCat("Russian Blue").then(cat => {
      return utilities.getBestPet(dog, cat)
    })
  })
  .then(console.log)
