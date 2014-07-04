/*global define*/

define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';

    var HighScoreModel = Backbone.Model.extend({
        url: function() {
            if (this.id == 'test') {
                return 'http://0.0.0.0:3000/api/docs/body/high-score/get-a-high-score.json'
            } else {
                return 'http://0.0.0.0:3000/high_scores/1'
            }
        },
        validate: function(attrs, options) {},

        parse: function(response, options) {
            return response;
        }
    });

    return HighScoreModel;
});