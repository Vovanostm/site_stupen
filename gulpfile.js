// 'use strict';
//
// const gulp = require('gulp');
// const stylus = require('gulp-stylus');
// const concat = require('gulp-concat');
// const sourcemaps = require('gulp-sourcemaps');
// const debug = require('gulp-debug');
// const newer = require('gulp-newer');
// const autoprefixer = require('gulp-autoprefixer');
// const remember = require('gulp-remember');
// const cached = require('gulp-cached');
// const gulpIf = require('gulp-if');
// const del = require('del');
// const pug = require('gulp-pug');
//
// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
//
// gulp.task('hello', function () {
//     console.log('Hello');
//
// })
//
// gulp.task('styles', function () {
//     return gulp.src('src/styles/**/main.styl', {base: "src/styles"})
//         .pipe(gulpIf(isDevelopment, sourcemaps.init()))
//         .pipe(debug({title: 'src'}))
//         .pipe(stylus())
//         .pipe(gulpIf(isDevelopment, sourcemaps.write()))
//         .pipe(debug({title: 'stylus'}))
//         .pipe(cached('styles'))
//         .pipe(autoprefixer())
//         .pipe(debug({title: 'autoprefixer'}))
//         .pipe(gulp.dest('public'));
//     //вместо cached можно remember
//
// });
//
// gulp.task('clean', function () {
//     return del('public');
//
// });
//
// gulp.task('assets', function () {
//     return gulp.src('src/assets/**/*.*', {since: gulp.lastRun('assets')})
//         .pipe(newer('public'))
//         .pipe(debug({title: 'assets'}))
//         .pipe(gulp.dest('public'))
//
// });
//
// gulp.task('build', gulp.series('clean', gulp.parallel('styles', 'assets')));
//
// gulp.task('watch', function () {
//     gulp.watch('src/styles/**/*.*', gulp.series('styles')).on('unlink', function (filepath) {
//         remember.forget('styles', path.resolve(filepath))
//         delete cached.cashes.styles[path.resolve(filepath)];
//     });
//     gulp.watch('src/assets/**/*.*', gulp.series('assets'));
// });
//
// gulp.task('comp_pug', function () {
//     return gulp.src('src/pug/index.pug')
//         .pipe(pug())
//         .pipe(gulp.dest('public'))
//
// })
//
// gulp.task('dev', gulp.series('build', 'watch'));

const gulp = require('gulp');
const pug = require('gulp-pug');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const newer = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const remember = require('gulp-remember');
const cached = require('gulp-cached');
const gulpIf = require('gulp-if');
const stylus = require('gulp-stylus');
const del = require('del');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const browserSync = require('browser-sync').create();
const combiner = require('stream-combiner2').obj;
const eslint = require('gulp-eslint');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';



gulp.task('build:pug', function() {
    return combiner(
        gulp.src('src/index.pug'),
        pug(),
        gulp.dest('public') //Выплюнем их в папку build
    ).on('error', notify.onError(function(err){
     return {
      title:'pug',
      message: err.message
     }
    }))
});

gulp.task('stylus:concat', function() {
    return combiner(
        gulp.src('src/styles/**/*.styl'),
        concat()
    )
})
gulp.task('build:styles', function() {
    return combiner(
        gulp.src('src/styles/**/*.styl'),
        concat('style.style'),
        stylus(),
        cleanCSS(),
        gulp.dest('public/styles')
    ).on('error', notify.onError())

});

gulp.task('build:scripts', function() {
    return combiner(
        gulp.src('src/scripts/**/*.js'),
        concat('script.js'),
        eslint(),
        eslint.format(),
        babel({
            presets: ['es2015']
        }),
        uglify(),
        gulp.dest('public/scripts')
    ).on('error', notify.onError())
});

gulp.task('build:assets', function() {
    return gulp.src(['src/assets/**/*.png', 'src/assets/**/*.jpg','src/assets/**/*.svg'], {
            since: gulp.lastRun('build:assets')
        })
        .pipe(newer('public/assets'))
        .pipe(imagemin())
        .pipe(gulp.dest('public/assets'))

});

gulp.task('copy:assets', function() {
    return gulp.src(['src/assets/**/*.png', 'src/assets/**/*.jpg','src/assets/**/*.svg'])
        .pipe(newer('public/assets'))
        .pipe(gulp.dest('public/assets'))

});

gulp.task('clean', function() {
    return del('public');

});

gulp.task("copy:webfonts", function() {
    return gulp.src('src/fonts/**/*.woff')
        .pipe(gulp.dest('public/fonts'))
});

gulp.task('serve', function() {
    browserSync.init({
        server: '.'
    });
    //browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.pug', gulp.series('build:pug'));
    gulp.watch('src/scripts/**/*.js', gulp.series('build:scripts'));
    gulp.watch('src/styles/**/*.styl', gulp.series('build:styles')).on('unlink', function(filepath) {
        remember.forget('styles', path.resolve(filepath))
        delete cached.cashes.styles[path.resolve(filepath)];
    });
    gulp.watch('src/assets/**/*.*', gulp.series('build:assets'));
});
//
gulp.task('build', gulp.series(gulp.parallel('build:scripts', 'build:pug', 'build:styles')));
//
gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
//
gulp.task('public', gulp.series('clean', gulp.parallel('build', 'copy:webfonts', 'build:assets')));
//
// gulp.task('dev',function(){});
//
//
//
//
//
//
// // additional
// const jscs = require('gulp-jscs'); //check code_style
// const modernizr = require('gulp-modernizr'); //code for browser version
// const responsive = require('gulp-responsive'); //resize images and minify
// const psi = require('psi');
// const site_name = 'http://www.web.informatics.ru';
// const psi_api_key = '';
// const git = require('gulp-git'); //git
// const tiny_imagemin = require('gulp-tinypng'); // maximum compression
//
// /*additional tasks:
//  * 1) check_code_style (https://github.com/jscs-dev/gulp-jscs)
//  * 2) moderniz (https://github.com/doctyper/gulp-modernizr) //code for browser version
//  * 3) responsive (https://github.com/mahnunchik/gulp-responsive) //resize and min_images
//  * 4) test_site_speed  (https://github.com/addyosmani/psi-gulp-sample/blob/master/gulpfile.js)
//  * 5) git_auto_push (https://github.com/stevelacy/gulp-git) //add, commit, push
//  */
//
// gulp.task('check_code_style', function() {
//     return gulp.src('src/scripts/**/*.js')
//         .pipe(jscs())
//         .pipe(jscs.reporter());
//
// });
//
// gulp.task('modernizr', function() {
//     gulp.src('./js/*.js')
//         .pipe(modernizr())
//         .pipe(gulp.dest("build/"))
// });
//
//
//
// gulp.task('responsive', function() {
//     return gulp.src('src/assets/main-header/thematic*.{png,jpg}')
//         .pipe(responsive({
//             '*.jpg': {
//                 width: 1366,
//                 height: 768,
//                 quality: 100
//             },
//             'cover.png': {
//                 width: '50%',
//                 // convert to jpeg format
//                 format: 'jpeg',
//                 rename: 'cover.jpg'
//             },
//             // produce multiple images from one source
//             'logo.png': [{
//                 width: 200
//             }, {
//                 width: 200 * 2,
//                 rename: 'logo@2x.png'
//             }]
//         }))
//         .pipe(gulp.dest('dist'));
// });
//
//
//
// // get the PageSpeed Insights report
// gulp.task('psi_mobile', function() {
//     return psi(site_name, {
//         // key: key
//         nokey: 'true',
//         strategy: 'mobile',
//     }).then(function(data) {
//         console.log('Speed score: ' + data.ruleGroups.SPEED.score);
//         console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
//     });
// });
//
// gulp.task('psi_desktop', function() {
//     return psi(site_name, {
//         nokey: 'true',
//         // key: key,
//         strategy: 'desktop',
//     }).then(function(data) {
//         console.log('Speed score: ' + data.ruleGroups.SPEED.score);
//     });
// });
//
// gulp.task('test_site_speed', gulp.series('psi_mobile', 'psi_desktop'))
//
// gulp.task('git_auto_push', function() {
//     return gulp.src('./git-test/*')
//         .pipe(git.add())
//         .pipe(git.commit('auto_added_commit'))
//         .git.push('origin', 'master', function(err) {
//             if (err) throw err;
//         });
//
// });
//
//
// gulp.task('tinypng', function() {
//     gulp.src('src/*.+(png|jpg)')
//         .pipe(tingpng('qAbsAaOi67gIJUrJEHzHGV6tTSFapOd0'))
//         .pipe(gulp.dest('public'));
// });


// const notifier = require('node-notifier');
// // String
// notifier.notify('Message');
//
// // Object
// notifier.notify({
//   'title': 'My notification',
//   'message': 'Hello, there!'
// });


// gulp.task('build:labs_jade', function() {
//     return gulp.src('src/labs/**/index.pug')
//         .pipe(pug())
//         .pipe(gulp.dest('public/labs')); //Выплюнем их в папку build
// });
//
// gulp.task('build:labs_scripts', function() {
//     return gulp.src('src/labs/**/hardware.js')
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest('public/labs')); //Выплюнем их в папку build
// });
//
//
// gulp.task('build:scripts', function() {
//     return gulp.src('src/scripts/**/*.js')
//         .pipe(babel({
//             presets: ['es2015']
//         }))
//         .pipe(uglify())
//         .pipe(gulp.dest('public/scripts'))
// });
//
// gulp.task('build:styles', function() {
//     return gulp.src('src/styles/**/*.css')
//         .pipe(cleanCSS())
//         .pipe(gulp.dest('public/styles'))
//
// });
//
// gulp.task('build:labs_assets', function() {
//     return gulp.src('src/labs/**/images/*.*', {
//             since: gulp.lastRun('build:labs_assets')
//         })
//         .pipe(newer('public/labs'))
//         .pipe(imagemin())
//         .pipe(gulp.dest('public/labs'))
//
// });




// main tasks
