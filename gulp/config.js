/**
 * The default Settings
 * e.g.  src dest 
 */
var src = './app/';
var dest = "./www/";

var config = {
	src: src,
	dest: dest,
    css:{
        'pageSrc': [src + '!(_)*/*.scss', src + '!(_)*/**/*.scss'],
        'widgetSrc': [src + '_widgets/**/*.scss'],
        'dest': dest
    },
    html: {
        'pageSrc': [src + '*.jade', src + '!(_)*/*.jade'],
        'allSrc': [src + '*.jade', src + '**/*.jade'],
        'dest': dest
    },
    js: {
    	'src': [src + '**/*.js'],
    	'dest': dest + 'static/'
    }
};

module.exports = config;