var chalk = require("chalk"); //lack of a path name means that this refers to an npm package

var message = "Hello " + chalk.yellow("World");
message += "\n" + chalk.blue.bgRed("I am testing out chalk!") + " " + chalk.underline.magenta("It's pretty neat!");
message += "\n" + chalk.red.underline("Chalk lets you do some cool things, like " + chalk.bgGreen.bold("nesting styles!"));
var error = chalk.bold.red;
message += "I can even declare styles by assigning them to variables! For example:\n" + error("I can apply this style to all my error messages!");

console.log(message);