// Define an type alias Participant with properties name (string) and role (string).
// Define an interface Event with properties date (Date), title (string), and participants (array of Participant objects).
// Create an object called event1 using the Event interface.
// Invert the exercise, using Event as a type alias and participants as an interface.
// DO NOT GET STUCK HERE TOO LONG - max 5 mins

type Participant = {
  name: string
  role: string
}

interface EventData {
  date: Date
  title: string
  participants: Participant[]
}

const event1: EventData = {
  date: new Date('2026-05-01'),
  title: 'TypeScript Workshop',
  participants: [
    { name: 'Awshaf', role: 'Instructor' },
    { name: 'Tatsuya', role: 'Student' },
    { name: 'Keisei', role: 'Student' },
  ],
}

console.log(event1)
