// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
    baseUrl: '../',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        underscore: 'bower_components/lodash/dist/lodash',
        backbone: 'bower_components/backbone/backbone',
        app: 'scripts/app',
        router: 'scripts/router',
        views: 'scripts/views'
    }
});

require([
    // Load our app module and pass it to our definition function
    'app',
], function(App) {
    // The "app" dependency is passed in as "App"
    App.initialize();
}); /*global MyClient, $*/