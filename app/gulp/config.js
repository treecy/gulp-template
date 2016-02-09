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
        'jade_src': src + "**/*.scss",
        'dest': dest + '/static/js',
        'pkg_dest': dest + '/static/js/pkg',
        'packages': {
            'js-vendor': [
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
