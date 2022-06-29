const pwd = require("./pwd");
const ls = require("./ls");
const cat = require("./cat");
const curl = require("./curl");
const date = require ("./date");
const echo = require("./echo");
const wc = require("./wc")

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ")[0];
  const arg = data.toString().trim().split(" ")[1];

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
        ls();
  } else if (cmd === "cat") {
        cat(arg);
  } else if (cmd === 'curl') {
        curl(arg);
  } else if (cmd === 'date') {
        date();
  } else if (cmd === 'echo') {
        echo(arg);
  } else if (cmd === 'head') {

  }  else if (cmd === 'tail') {

  } else if (cmd === 'sort') {

  } else if (cmd === 'wc') {
      wc(arg);
  } else if (cmd === 'uniq') {

  } else if (cmd === 'find') {

  }
  else {
        process.stdout.write(cmd + " not found");
        process.stdout.write("\nprompt > ");
  }
});