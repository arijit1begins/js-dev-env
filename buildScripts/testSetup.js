// This file isn't transpiled, so using CommonJS and ES5

//register babel to transpile befre our tests run

require('babel-register')();

//Disable webpack features that MOCHA does not understand
require.extensions['.css'] = function() {}
