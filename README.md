# 💫 fuse-gulp-rollup-babel

This is an example of how you can integrate [Gulp](http://gulpjs.com/), [Rollup](http://rollupjs.org/) and [Babel](https://babeljs.io/) into your [Fuse](https://www.fusetools.com/) workflow, allowing you to use ES2015 features (and more!) in your Fuse app.

## Prerequisites

1. Install [Node.js and npm](https://nodejs.org/en/) if you haven't already.
2. Install gulp globally: `npm install -g gulp`
3. Clone this repo: `git clone https://github.com/sebbert/fuse-gulp-babel.git`
4. Inside the project folder, run `npm install` to fetch dependencies.

## Using it

Run `gulp watch` to watch for changes to files in the `js` folder.
When a change occurs, rollup and babel will run, and your transpiled, concatenated JS file will end up as `js-build/app.js`. This will in turn trigger an update in the Fuse preview simulator if it's running.

The entry point is `js/app.js`, which means that only this file will be able to export objects to fuse.

## License

[MIT](LICENSE)
