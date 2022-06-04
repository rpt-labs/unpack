// NOTE: each time you change this file and want to try again, you will need to "control-c" in the
// terminal, and re-run the "npm run react-webpack" command.

// TODO: edit the lines below that have comments above them
// you might want to refer to webpack docs as well https://webpack.js.org/concepts/
// (this repo was created with webpack v5)

var path = require('path');
const chalk = require('chalk');

// you can now delete or comment out these next lines:
setTimeout(()=> {
  console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
  console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
  console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
  console.log(chalk.bgYellowBright('oops... webpack.config.js isn\'t ready yet.\nNEXT: Please inspect that file now        \n'));
}, 2000);

// Update this variable below to point to the folder with the file
// that will be webpack's "entry point".
// This is the first file that webpack puts into the "bundle.js" file it is creating.
// Webpack will then create a "dependency graph", bundling any dependencies
// referenced by the file. Such as: other files, npm modules, images, or css.
// see https://webpack.js.org/concepts/dependency-graph/
// Have this variable resolve to the "webpack-src" folder inside of "./client"
var SRC_DIR = path.join(__dirname, 'edit this value according to the paragraph above');

// Update this next variable to point to the folder
// where webpack will write the final bundled file.
// Have this variable resolve to the "dist" folder inside of "./client"
var DIST_DIR = path.join(__dirname, 'edit this value according to the paragraph above');


module.exports = {
  // mode needs to be set to 'development'. Another option is 'production'
  mode: 'development',

  // this will reference the value set above, and look first at 'index.jsx'
  // as the starting point when combining all the files into a final bundle.
  entry: `${SRC_DIR}/index.jsx`,
  output: {

    // standard name
    filename: 'bundle.js',

    // this was set above
    path: DIST_DIR,
  },

  // Out of the box, webpack only understands JavaScript and JSON files. "Loaders" allow
  // webpack to process other types of files and convert them into valid modules that can
  // be consumed by your application and added to the dependency graph.

  module: {

    rules: [
      {
        // this loader allows the direct "import" of css rules, such as in
        // client/webpack-src/Image.jsx

        // The "test" property identifies which file or files should be transformed.
        // The "use" property indicates which loader should be used to do the transforming.
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {

          // NOTE: when using the 'babel-loader', there must be a ".babelrc" file
          // with the proper plugins.
          // NEXT: head to ".babelrc" and follow the instructions there to
          // make the needed edits in that file
          loader: 'babel-loader',
        },
      }
    ],
  },
};
