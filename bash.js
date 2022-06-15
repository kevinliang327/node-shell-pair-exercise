const ls = require("./ls");
const pwd = require("./pwd");
const cat = require("./cat");

process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ")[0];
  const fileName = data.toString().trim().split(" ")[1];

  if (cmd === "pwd") {
    pwd();
  } else if (cmd === "ls") {
    ls();
  } else if ( cmd === "cat" ) {
    cat(fileName);
  }
  else {
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write("\nprompt > ");
});
