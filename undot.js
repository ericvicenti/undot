const child_process = require("child_process");

setInterval(() => {
  child_process.execFileSync("./undot");
}, 500);
