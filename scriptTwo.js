//Getting data from an API & displaying it on the page
const list = document.querySelector('ul')
console.log(list)

fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.forEach((user) => {
      const markup = `<li>${user.name}</li>`
      list.insertAdjacentHTML('beforeend', markup)
    })
  })
  .catch((err) => console.log(err))
