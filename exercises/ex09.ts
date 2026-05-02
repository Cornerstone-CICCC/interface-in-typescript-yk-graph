// Create an interface ErrorContainer with an index property that holds error messages.
// Define an object errorBag using the ErrorContainer interface and display the error messages.

interface ErrorContainer {
  [key: string]: string
}

const errorBag: ErrorContainer = {
  email: 'Invalid email address',
  username: 'Username must be at least 3 characters long',
}

console.log(errorBag.email) // Invalid email address
console.log(errorBag.username) // Username must be at least 3 characters long
