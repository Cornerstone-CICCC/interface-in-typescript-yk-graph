// Create an interface User.
// User has address that may not be defined, and address has street, and zipCode.
// Create an object user1 with nested property: address.
// Use optional chaining to access the zipCode property to print with console.log.

interface User {
  name: string
  address?: {
    street: string
    zipCode: string
  }
}

const user1: User = {
  name: 'Alice',
  address: {
    street: '123 Main St',
    zipCode: '12345',
  },
}

console.log(user1.address?.zipCode) // 12345

const user2: User = {
  name: 'Bob',
}

console.log(user2.address?.zipCode) // undefined
