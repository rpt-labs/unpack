const express = require('express');
const path = require('path');
const chalk = require('chalk');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
  console.log(chalk.yellow('\nWecome to UNPACK.', '\n'));
  console.log(chalk.yellow('Follow the instuctions that are revealed at each step.\nIt will lead you through the codebase.\nYou\'ll get a playable video game in the browser\nafter completing the final step!', '\n'));
  console.log(chalk.red.bold('This server doesn\'t do anything, aside from serving the static assets we\'ll need'));
  console.log(chalk.yellowBright.underline('NEXT: Open your browser and navigate to http://localhost:3000'));
});
