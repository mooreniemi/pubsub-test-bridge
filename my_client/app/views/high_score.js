/*global define*/

define([
    'jquery',
    'backbone',
    'handlebars',
    'hbs!templates/high_score'
], function($, Backbone, Handlebars, template) {
    'use strict';

    var HighScoreView = Backbone.View.extend({
        template: template,
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