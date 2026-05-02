// Create a variable userInput with a null value.
// Use nullish coalescing to set a default value Please enter something... if userInput is null or undefined.
// Display the resulting value.

let userInputs: string | null = null

const result = userInputs ?? 'Please enter something...'

console.log(result) // Please enter something...

userInputs = 'Hello, World!'

const newResult = userInputs ?? 'Please enter something...'

console.log(newResult) // Hello, World!
