var requireDir = require('require-dir');

// Require all tasks in gulp/tasks, including subfolders
// default.js is the first task
requireDir('./gulp/tasks', { recurse: true });
