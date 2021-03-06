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
        'commonSrc': [src + '_common/css/*.scss', src + '_widgets/**/*.scss'],
        'dest': dest
    },
    html: {
        'pageSrc': [src + '*.jade', src + '!(_)*/*.jade'],
        'allSrc': [src + '*.jade', src + '**/*.jade'],
        'dest': dest
    },
    js: {
    	'src': [src + '**/*.js'],
        'commonSrc': [src + '_widgets/**/*.js',src + '_common/js/*.js'],
    	'dest': dest + 'static/'
    }
};

module.exports = config;