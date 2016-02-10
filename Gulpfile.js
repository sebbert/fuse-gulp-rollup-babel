const gulp = require("gulp");
const babel = require("gulp-babel");
const plumber = require("gulp-plumber");
const gutil = require("gulp-util");

const SourcePath = "js/**/*.js";

var isWatching = false;

gulp.task("default", () =>
	gulp.src(SourcePath)
		// Prevent gulp watch from exiting when an error is emitted
		.pipe(isWatching ? plumber() : gutil.noop())
		.pipe(babel({
			presets: ["es2015"]
		}))
		.pipe(gulp.dest("js-build"))
);

gulp.task("watch", () => {
	isWatching = true;
	gulp.watch(SourcePath, ['default'])
});