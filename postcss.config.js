/**
 * POSTCSS configuration file
 * 
 * Author: Rajat Kumar
 * 
 */


// Dependencies
var autoprefixer = require('autoprefixer');


// Exporting Configuration
module.exports = {
    plugins: [
        autoprefixer({ browsers: ['IE 10', 'IE 11', 'firefox 20', 'ios_saf 8.4', 'android 4.3'] })
    ]
}