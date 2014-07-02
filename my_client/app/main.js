/*global require*/
'use strict';

require(['require_config'], function() {
  require([
    'backbone', 'router'
  ], function(Backbone, HighScoreRouter) {
    var appRouter = new HighScoreRouter();
    Backbone.history.start({
      pushState: true
    });
  });
});
