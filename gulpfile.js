"use stric";

var gulp = require("gulp");
var connect = require("gulp-connect"); //runs a local dev server
var open = require("gulp-open"); //open a URL in a web browser

var browserify = require("browserify"); //Bundle JS
var reactify = require("reactify"); //Transfors React JSX to JS
var source = require("vinyl-source-stream"); //Use conventional text stream with gulp

var concat = require("gulp-concat"); // Concatenates files

var lint = require("gulp-eslint"); // Lint JS file, including JSX

var config = {
    port: 1010,
    devBaseUrl: "http://localhost",
    paths: {
        html: "./src/*.html",
        js: "./src/**/*.js",
        images: "./src/images/*",
        css: [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap/dist/css/bootstrap-theme.min.css",
        ],
        dist: "./dist",
        mainJs: "./src/main.js"
    }
}

//Start a local development server
gulp.task("connect", function () {

    connect.server({
        root: ["dist"],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true,
    });
});

gulp.task("html", function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task("open", ["connect"], function () {
    gulp.src("dist/index.html")
        .pipe(open(
            {
                uri: config.devBaseUrl + ":" + config.port + "/"
            })
        )
});

gulp.task("js", function () {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on("error", console.log.bind(console))
        .pipe(source("bundle.js"))
        .pipe(gulp.dest(config.paths.dist + "/scripts"))
        .pipe(connect.reload());
});

gulp.task("css", function () {
    gulp.src(config.paths.css)
        .pipe(concat("bundle.css"))
        .pipe(gulp.dest(config.paths.dist + "/css"))
});

// gulp.task("lint", function () {
//     return gulp.src(config.paths.js)
//         .pipe(lint({ config: "eslint.json" }))
//         .pipe(lint.format());
// });

//observa los cambios que haya en ese path y ejecuta la tarea "html"
gulp.task("watch", function () {
    gulp.watch(config.paths.html, ["html"]);
    gulp.watch(config.paths.js, ["js" /*, "lint"*/]);
});

gulp.task("images", function(){
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + "/images"))
        .pipe(connect.reload());

        //publish favicon
        gulp.src("./src/favicon.ico")
            .pipe(gulp.dest(config.paths.dist));
});

gulp.task("default", ["html", "js", "css", /*"lint",*/ "images", "open", "watch"]);