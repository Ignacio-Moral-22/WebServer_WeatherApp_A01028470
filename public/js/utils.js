console.log("Archivo javascript cliente cargado")

fetch("https://puzzle.mead.io/puzzle").then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    fetch('/weather?address=' +
        location).then((response) => {
            response.json().then((data) => {
                const messageOne = document.querySelector('#message-1')
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.clima
                    console.log(data.address)
                    console.log(data.clima)
                }
            })
        })
})
