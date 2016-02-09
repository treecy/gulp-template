var dest = "../app/public";
var src = './views';
var temp = './.temp';

module.exports = {
  css: {
    'less_src': src + "**/*.less",
    'dest': dest + '/static/css/',
    'pkg_dest': dest + '/static/css/pkg',
    'settings': {}
  },
  production: {
    cssSrc: dest + '/*.css',
    jsSrc: dest + '/*.js',
    dest: dest
  }
};
