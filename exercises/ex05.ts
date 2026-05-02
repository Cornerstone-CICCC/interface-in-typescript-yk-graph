// Define types Admin and Employee with appropriate properties of your choice.
// Create an intersection type AdminEmployee that combines properties from both Admin and Employee.
// Instantiate an object using the AdminEmployee type and display the properties.

type Admin = {
  name: string
  role: string
}

type Employee = {
  name: string
  department: string
}

type AdminEmployee = Admin & Employee

const adminEmployee1: AdminEmployee = {
  name: 'Tatsuya',
  role: 'Intern',
  department: 'IT',
}

console.log(adminEmployee1)
