var allTestFiles = [];
var TEST_REGEXP = /spec\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '../').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app',

  paths: {
    'view': 'views/high_score',
    'jasmine-jquery': 'bower_components/jasmine-jquery/lib/jasmine-jquery',
    'jasmine-ajax': 'bower_components/jasmine-ajax/lib/mock-ajax',
    'jasmine-fixture': 'bower_components/jasmine-fixture/dist/jasmine-fixture'
  },

  shim: {
    'jasmine-jquery': {
      deps: ['jquery'],
      exports: 'jasmine'
    },
    'jasmine-ajax': {
      deps: ['jasmine-jquery', 'jquery'],
      exports: 'jasmine'
    },
    'jasmine-fixture': {
      deps: ['jquery']
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
