/*global describe, it */
'use strict';

define(function(require) {
    var HighScoreModel = require('models/high_score'),
        HighScoreView = require('views/high_score');

    require('jquery'),
    require('jasmine-fixture'),
    require('jasmine-jquery');

    beforeEach(function() {
        affix('#main');
    });

    describe('Integration test', function() {
        describe('displaying scores', function() {
            it('should fetch and render correctly from my_api', function() {
                var model = new HighScoreModel({
                    id: 1,
                    game: 'settlers of catan'
                }),
                    view = new HighScoreView({
                        model: model
                    });
                view.render();
                expect($('#main')).toContainText('settlers of catan')
            });
        });
    });
});