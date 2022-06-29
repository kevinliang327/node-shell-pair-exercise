const fs = require("fs");

module.exports = function (fileName) {
    fs.stat(fileName, 'utf8', (err, stats) => {
        if (err) {throw err};
    // const wordCount = data.split(" ").length;
    console.log(stats.size);
});
    process.stdout.write(fileName);
    process.stdout.write("\nprompt > ");
}    
