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
        'router': 'routes/high_score',
        'view': 'views/high_score',
        'model': 'models/high_score',
        handlebars: 'bower_components/handlebars/handlebars',
        jquery: 'bower_components/jquery/dist/jquery',
        backbone: 'bower_components/backbone/backbone',
        underscore: 'bower_components/lodash/dist/lodash.underscore',
        bootstrap: 'bower_components/sass-bootstrap/dist/js/bootstrap'
    }
});
