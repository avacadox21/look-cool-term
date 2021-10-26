const chalk = require("chalk")
const randomString = require("randomstring")

//simplify logging 
const log = console.log;
function setTerminalTitle(title)
{
  process.stdout.write(
    String.fromCharCode(27) + "]0;" + title + String.fromCharCode(7)
  );
}

setTerminalTitle("GOD MODE")
while (true) {
    log(chalk.green("     " + randomString.generate(80)))
}