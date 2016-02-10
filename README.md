# 💫 fuse-gulp-babel

An example of how you can integrate [Gulp](https://github.com/gulpjs/gulp) and [Babel](https://github.com/babel/babel) into your [Fuse](https://www.fusetools.com/) workflow, allowing you to use ES6 features (and more!) in your Fuse app.

## Prerequisites

1. Install [Node.js and npm](https://nodejs.org/en/) if you haven't already.
2. Install gulp globally: `npm install -g gulp`
3. Clone this repo: `git clone https://github.com/sebbert/fuse-gulp-babel.git`
4. Inside the project folder, run `npm install` to fetch dependencies.

## Using it

Run `gulp watch` to watch for changes to the `js` folder. When a change occurs, babel will run, and your resulting ES5 files will appear in the `js-build` folder.

_Note:_ In your UX, you need to import your javascript files from the `js-build` folder, not the `js` folder.

## License

[MIT](LICENSE)