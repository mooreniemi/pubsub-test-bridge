/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars'
], function($, _, Backbone, Handlebars) {
    'use strict';

    var HighScoreView = Backbone.View.extend({
        template: Handlebars.compile('<table class="table"><tr><td>{{id}}</td></tr><tr><td>{{game}}</td></tr><tr><td>{{score}}</td></tr></table>'),
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