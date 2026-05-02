// Create an input element with id user-input in HTML.
// Use type casting to access and modify the value of the input element.

const userInput = document.getElementById('user-input') as HTMLInputElement

if (userInput) {
  userInput.value = 'Hello, TypeScript!'
}
