"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
const rollup = require("rollup-stream");
const source = require("vinyl-source-stream");
const babel = require("rollup-plugin-babel");

var isWatching = false;

gulp.task("default", () => {
	let stream = rollup({
		entry: "js/app.js",
		format: "cjs",
		plugins: [
			babel({
				presets: ["es2015-rollup"]
			})
		]
	})
    stream.on('error', e => {
        console.error(`${e.stack}`)
        stream.emit('end')
    })
	.pipe(source("app.js"))
	.pipe(gulp.dest("js-build"))
});

gulp.task("watch", () => gulp.watch(["js/", "js/**/*.js"], ['default']));