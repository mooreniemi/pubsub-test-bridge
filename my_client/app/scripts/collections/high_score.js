/*global define*/

define([
    'underscore',
    'backbone',
    'models/high_score'
], function (_, Backbone, HighScoreModel) {
    'use strict';

    var HighScoreCollection = Backbone.Collection.extend({
        model: HighScoreModel
    });

    return HighScoreCollection;
});
