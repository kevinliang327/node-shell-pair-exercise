const request = require('request');

module.exports = function(url) {
    request(url, (err, response, body) => {
        if (err) {
            throw err;
        }
        else {
            console.log(body);
            process.stdout.write("\nprompt > ");
        }
    })
}