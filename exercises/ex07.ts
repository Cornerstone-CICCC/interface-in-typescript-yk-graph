// Create interfaces Bird and Horse with respective properties and a discriminated property breed.
// Implement a function moveAnimal that print how animal moves based on animal (Bird or Horse) parameter received. Eg:  bird fly, horse gallop.

interface Bird {
  breed: 'bird'
  wingSpan: number
}

interface Horse {
  breed: 'horse'
  speed: number
}

type Animals = Bird | Horse

function moveAnimal(animal: Animals) {
  if (animal.breed === 'bird') {
    console.log(`The bird flies with a wingspan of ${animal.wingSpan} cm.`)
  } else if (animal.breed === 'horse') {
    console.log(`The horse gallops at a speed of ${animal.speed} km/h.`)
  }
}

const myBird: Bird = { breed: 'bird', wingSpan: 30 }
const myHorse: Horse = { breed: 'horse', speed: 60 }

moveAnimal(myBird)
moveAnimal(myHorse)
