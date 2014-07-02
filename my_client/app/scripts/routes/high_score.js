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
            console.log('you are viewing home page');
        },
        show: function(id) {
            console.log(id)
            var model = new HighScoreModel({
                id: id
            }),
                view = new HighScoreView({
                    el: $("#main"),
                    model: model
                });
            view.render();
        }

    });

    return HighScoreRouter;
});