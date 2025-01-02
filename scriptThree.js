//Manipulating the DOM #1
const btn = document.querySelector('button')
const input = document.querySelector('input')
const headingEl = document.querySelector('.heading')
const styledEl = document.querySelector('.styled')
//Disabling a button
// btn.disabled = true
//Unfocusing a button to prevent it from being activated with the spacebar.
// btn.blur()
//Focusing a button
btn.focus()
//Setting a default value to an input
input.value = 'ok'
//changing text
headingEl.textContent = 'Changing a heading'
//to style an element use innerHTML
styledEl.innerHTML = 'Text <span>styled</span>'
//to add an element instead of replacing on use insertAdjecentHTML
styledEl.insertAdjacentHTML('beforebegin', 'Hello <span>world</span>!')
//use backticks to insert large chunks of HTML in multiple line with the possibility to insert JS values.
const occupation = 'doctor'
car = {
  model: 2019,
  color: 'silver',
}
styledEl.innerHTML = `This text has <br> HTML tags.
And JS values such as someone's occupation: ${occupation} who has a ${car.model} car.`
