const gulp = require("gulp");
const plumber = require("gulp-plumber");
const gutil = require("gulp-util");
const rollup = require("gulp-rollup");
const babel = require("rollup-plugin-babel");

const Entry = "js/index.js";

var isWatching = false;

gulp.task("default", () =>
	gulp.src(Entry)

		// Prevent gulp watch from exiting when an error is emitted
		.pipe(isWatching ? plumber() : gutil.noop())

		// Transpile ES2015 -> ES5 and concat using rollup and babel
		.pipe(rollup({
			format: "cjs",
			plugins: [
				babel({
					presets: ["es2015-rollup"]
				})
			]
		}))
		
		.pipe(gulp.dest("js-build"))
);

gulp.task("watch", () => {
	isWatching = true;
	gulp.watch("js/**/*.js", ['default'])
});