/* eslint-disable */

const chalk = require('chalk');

let next = `
Your next task is to open package.json and replace the "react-babel" script.

You will now write a npm script to use the babel npm package (which was already installed via npm) to transpile your code.

Here's a breakdown of the syntax for the one-line command you'll need to write:
You may need to consult the babel docs to look up how to put this all together.
https://babeljs.io/docs/en/usage

1. You'll be editing the existing script, and start by replacing it with a string beginning with just "babel ".
2. Next, add the target folder you want to transpile (the "client/babel-src" folder)
3. then add the "--out-dir" command, which is where you want the transpiled code to be output on disk. (Use the empty "client/dist/compiled" folder)
4. then add the needed "flags" for the "presets" (npm packages) that babel will use to interpret the jsx code that will be transpiled. It will look like: "--presets=@babel/preset-react".
5. then add this flag for including source maps with "--source-maps inline". Source maps will allow the browser to print console messages corresponding to the line numbers of your original code, before it was transpiled.
6. finally, end the script with "--watch" so it will re-run when you save changes to the target folder.

When you have this working, you'll be able to:
1. run "npm run react-babel" in this terminal
2. refresh the browser
and the current text on the screen will be replaced with some 😎 cool 😎 cool 😎 graphics.

And then, your next task will be revealed!

`

console.log(chalk.white(next))
