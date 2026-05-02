// Define a union type StringOrNumber that includes string and number.
// Write a function printInfo that prints information based on the type of the argument (string or number).
// Call the function with both a string and a number.

type StringOrNumber = string | number

function printInfo(value: StringOrNumber) {
  if (typeof value === 'string') {
    console.log(`String: ${value}`)
  } else {
    console.log(`Number: ${value}`)
  }
}

printInfo('Hello')
printInfo(42)
