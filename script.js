//-----------------> STRINGS <-----------------
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
