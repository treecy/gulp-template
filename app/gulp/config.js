var dest = "../www/public";
var src = './widget/';
var temp = './.temp';

var config = {
    css: {
        'sass_src': src + "**/*.scss",
        'dest': dest + '/static/css',
        'pkg_dest': dest + '/static/css/pkg',
        'packages': {
            'css-vendor': [
                dest + '/static/css' + '/vendor/**/jquery*.css',
                dest + '/static/css' + '/vendor/**/!(jquery)*.css'
            ]
        }
    },
    js: {
        'browserifySrc': src + "**/main.js",
        'dest': dest + '/static/js',
        'pkgDest': dest + '/static/js/pkg',
        'packages': {
            'jsVendor': [
                dest + '/static/js' + '/vendor/**/jquery*.js',
                dest + '/static/js' + '/vendor/**/!(jquery)*.js'
            ]
        }
    },
    production: {
        cssSrc: dest + '/*.css',
        jsSrc: dest + '/*.js',
        dest: dest
    }
};

module.exports = config;
