const request = require('request')

const forecast = (city, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=be64b522d5cce0d476ac424e1d2c73b9&query=' + city
    request({url: url, json: true}, (error, response) => {
        if (error){
            callback("Ubable to connect to weather service!", undefined)
        } else if (response.body.error) {
            callback("Unable to find location!", undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. Temperatura Actual: ' + response.body.current.temperature + ' grados. Temperatura en el exterior: ' + response.body.current.feelslike + ' grados'
            )
        }
    })

}

module.exports = forecast