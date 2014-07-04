/*global define*/
define([
    'jquery',
    'backbone',
    'view',
    'model'
], function($, Backbone, HighScoreView, HighScoreModel) {
    'use strict';

    var HighScoreRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'high_scores/:id': 'show'
        },
        home: function() {
            $('#main').html('you are viewing home page');
        },
        show: function(id) {
            var model = new HighScoreModel({
                id: id
            }),
                view = new HighScoreView({
                    model: model
                });
            model.fetch().done(function() {
                view.render();
            })
        }

    });

    return HighScoreRouter;
});