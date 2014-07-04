/*global describe, it */
'use strict';

define(function(require) {
    var HighScoreModel = require('models/high_score'),
        HighScoreView = require('views/high_score');

    describe('Integration test', function() {
        describe('displaying scores', function() {
            it('should fetch and render correctly from my_api', function() {
                expect(new HighScoreView({
                    model: new HighScoreModel()
                })).toBeDefined();
            });
        });
    });
});