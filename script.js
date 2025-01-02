//-----------------> STRINGS <--------------------------
const text = 'Hello there!  '
//length: returns the # of characters
console.log(text.length)
//includes(): returns true or false
console.log(text.includes('ll'))
//toUpperCase(): changes text to capitals
console.log(text.toUpperCase())
//trim(): removes white space
console.log(text.trim())
console.log(text.trim().length)
//substring(): selects part of a string
//2 arguments = a starting and end point (not included)
//1 argument = from that point onwards! (index included!)
console.log(text.substring(0, 5))
console.log(text.substring(6))
//chaining: mixing *methods
const result = text.toUpperCase().trim().substring(1)
console.log(result)
//-----------------> NUMBERS <-----------------
const total = 1543.897
//toFixed() -- 0 -> rounds number with no decimals
console.log(total.toFixed())
//toFixed() --2 -> rounds number with 2 decimals
console.log(total.toFixed(2))
//-----------------> BOOLEANS <-----------------
const love = 'I love NY'
if (!love.includes('NY')) {
  console.log('NY rocks')
} else {
  console.log('NY is not for me')
}
//dealing with a server
const response = {
  statusCode: 100,
  ok: false,
  data: [1, 2, 3],
  error: 'Deal with error now',
}
if (!response.ok) {
  console.log(response.error)
}
//-----------------> ARRAYS <-----------------
const numbers = [1, 44, 25, 62]
console.log(numbers.length)
numbers.push(10) //push() method
console.log(`This is the new array ${numbers}`)
console.log(numbers.includes(1)) //includes() method
console.log(numbers[1] * 2) //accessing an element by its index
numbers.forEach((num, i) => console.log(num * 2, [i])) //looping with foreach
const multiplyByTen = (num) => console.log(num * 10)
numbers.forEach(multiplyByTen) //prev. declare a fn to then pass as arg to forEach
const pets = [
  { name: 'Kuma', age: 11 },
  { name: 'Hana', age: 8 },
  { name: 'Guri', age: 8 },
]
console.log(pets[2].name)
console.log(pets[1])
//-----------------> OBJECTS <-----------------
//Objects in objects
const user = {
  name: 'Luigui',
  age: 22,
  address: {
    street: 'Smith St',
    city: 'USA',
  },
  hobbies: ['singing', 'hockey'],
}
console.log(user.address.street)
// Property name can be the same as the property value
// const username = input.value
// const password = input.value
// const newUser = {
//   username: username,
//   password: password,
// }
// Passing object as argument to function
const logUser = (person) => {
  console.log(`${person.name} likes:`)
  console.log(person.hobbies.forEach((h) => console.log(h)))
}
logUser(user)
//-----------------> INCREMENT++ & DECREMENT-- <-----------------
let numero = 100 //important to use let instead of const
numero++ // It's the same as: numero = numero + 1
console.log(numero)
numero--
console.log(numero)
//-----------------> CONSOLE <-----------------
console.log(typeof 6)
// When working directly in the console it returns undefined after the result if it's not a fn that returns stg.
//-----------------> FUNCTIONS <-----------------
// Calling a fn inside another fn
// Creating fn that do a specific task which may be used in multiple scenarios is a good example of REFACTORING TO DRY (DON'T REPEAT YOURSELF)
const message = () => {
  console.log('Operation done!')
}
const addNums = (a, b) => {
  console.log(a + b)
  message()
  return //early return / stops function execution
  console.log('Do one more')
}
addNums(2, 2)
// common structure to stop the fn when needed.
const checkCapacity = (n) => {
  if (n > 100) {
    console.log('No more space')
    return
  }
  console.log('Welcome')
}
checkCapacity(101)
//-----------------> HOISTING <-----------------
// With old var = variables and "traditional" fn can be called before they are declared if the declaration is somewhere in the code.
//-----------------> TIMERS <-----------------
// setTimeOut has two parameters: the 1st is the fn & the 2nd separated by a comma specifies when shall the fn run.
setTimeout(() => {
  let n = 1
  console.log('Hi!', n++)
}, 2000)
// setInterval(() => {
//   //setInterval call the fn every so often
//   console.log('Hola')
//   console.log('Adios')
// }, 2000)
//-----------------> LOOPS: for & forEach <-----------------
// You can only use forEach on an array.
const ages = [35, 34, 10, 7]
ages.forEach((n) => {
  console.log(n * 2)
})
// for "loops" have 3 parts: starting poing, finish line & increment rate.
for (let i = 0; i <= 10; i++) {
  console.log(i)
}
//-----------------> Fetch API <-----------------
// In the inspect tools: Network --> Fetch --> file-fetched --> Response
// After fetching the data "consume the promise" with .then()
fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => {
    if (!res.ok) {
      //When the status code is not ok
      console.log('Problem!')
    }
    return res.json() //converts json into JS (parses JSON) - takes time
  })
  .then((data) => {
    console.log(data)
    console.log(data[0].title)
  }) //make sure you include an action in case of errors
  .catch((error) => console.log(`This is the error: ${error}`))
//-----------------> Fetch API EXAMPLE <-----------------
