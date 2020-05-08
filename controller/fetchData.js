const request = require('request')

const fetchData = (err, callback) => {
    const url = 'https://randomuser.me/api';

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to location services!", undefined)
        } else {
            callback(undefined, {
                data: body.results
            })
        }
    })
}


module.exports = fetchData