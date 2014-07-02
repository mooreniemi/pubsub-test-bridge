/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars'
], function($, _, Backbone, Handlebars) {
    'use strict';

    var HighScoreView = Backbone.View.extend({
        template: Handlebars.compile('<div>{{id}}</div>'),
        events: {},
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return HighScoreView;
});