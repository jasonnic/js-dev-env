//This file isn't transpile, so must use CommonJS and ES5

//Register babel to transpile before our tests run.
require('babel-register');

//Diable webpack freatures that Mocha doesn't understand.
require.extensions['.css'] = function() {};
