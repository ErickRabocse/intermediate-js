// Getting data from an API & displaying it on the page
const list = document.querySelector('ul')
const image = document.querySelector('img')
fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then((data) => {
    // console.log(data)
    data.forEach((user) => {
      const markup = `<li>${user.name}</li>`
      list.insertAdjacentHTML('beforeend', markup)
    })
  })
  .catch((err) => console.log(err))

// Fetch API summary using GET
fetch('https://reqres.in/api/users')
  .then((res) => {
    if (!res.ok) {
      //This is a "guard cluse"
      console.log("Problem the resource doesn't exist!")
      return
    }
    return res.json()
  })
  .then((data) => {
    console.log(data.data[0].first_name)
    image.src = `${data.data[4].avatar}`
  })
  .catch((error) => console.log(error))

// Fetch API summary using POST, PUT & DELETE
// Use POST to sumbit data
const newUser = {
  name: 'Ana',
  occupation: 'Nurse',
  age: 44,
}
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    if (!res.ok) {
      //This is a "guard cluse"
      console.log("Problem the resource doesn't exist!")
      return
    }
    return res.json()
  })
  .then((data) => {
    console.log('Success!')
    console.log(data)
  })
  .catch((error) => console.log(error))
