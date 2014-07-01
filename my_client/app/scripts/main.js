/*global require*/
'use strict';

require.config({
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
        'app': 'app/scripts',
        handlebars: '../bower_components/handlebars/handlebars',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});

require([
    'backbone'
], function(Backbone) {
    Backbone.history.start();
});