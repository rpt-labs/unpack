const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  console.log(chalk.yellow.bgGreen('\nWecome to UNPACK.', '\n'));
  console.log(chalk.yellow.bgBlue('Follow the instuctions that are revealed at each step.\nIt will lead you through the codebase.\nYou\'ll see a playable video game in the browser after completing the final step!', '\n'));
  console.log(chalk.red.bgYellow.bold('This server doesn\'t do anything, aside from serving the static assets we\'ll need'));
  console.log(chalk.blue.bgYellow('NEXT: Open your browser and navigate to localhost:3000'));
});
