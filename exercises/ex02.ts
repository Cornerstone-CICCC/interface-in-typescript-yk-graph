// Animal with a breed(string) and name (string) properties;
// SoundMaker with a makeSound method.
// Create a class Pet that implements both Animal and SoundMaker.

// Instantiate a pet object and call the makeSound method to display the pet's sound.

interface Animal {
  breed: string
  name: string
}

interface SoundMaker {
  makeSound: () => void
}

class Pet implements Animal, SoundMaker {
  breed: string
  name: string

  constructor(breed: string, name: string) {
    this.breed = breed
    this.name = name
  }

  makeSound(): void {
    console.log(`${this.name} the ${this.breed} says: Woof!`)
  }
}

const myPet = new Pet('Dog', 'Buddy')
myPet.makeSound() // Buddy the Dog says: Woof!
