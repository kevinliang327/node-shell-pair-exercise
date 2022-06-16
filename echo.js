module.exports = function (string) {
    process.stdout.write(string);
    process.stdout.write('\nprompt > ');
}