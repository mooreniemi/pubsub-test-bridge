var allTestFiles = [];
var TEST_REGEXP = /\.spec\.js$/i;

var pathToModule = function(path) {
    return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        'handlebars': {
            exports: 'Handlebars'
        }
    },
    paths: {
        'view': 'app/scripts/views/high_score',
        handlebars: 'app/bower_components/handlebars/handlebars',
        jquery: 'app/bower_components/jquery/dist/jquery',
        backbone: 'app/bower_components/backbone/backbone',
        underscore: 'app/bower_components/lodash/dist/lodash',
        bootstrap: 'app/bower_components/sass-bootstrap/dist/js/bootstrap'
    },

    // dynamically load all test files
    deps: allTestFiles,
    // deps: ['scripts/views/high_score'],

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});