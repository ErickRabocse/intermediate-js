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
//-----------------> BOOLEANS video 17<-----------------
