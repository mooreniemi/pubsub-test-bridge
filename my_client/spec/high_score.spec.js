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

    describe('spectrum of tests from no integration to full integration', function() {
        describe('no fetch test', function() {
            describe('displaying scores', function() {
                it('should render correctly', function() {
                    var json = {
                        id: 1,
                        game: 'settlers of catan'
                    },
                        model = new HighScoreModel(json),
                        view = new HighScoreView({
                            model: model
                        });
                    view.render();
                    expect($('#main')).toContainText('settlers of catan')
                });
            });
        });

        describe('fetch from api documentation', function() {
            describe('displaying scores', function() {
                it('should fetch and render correctly from my_api', function() {
                    var fetchDone = false,
                        model = new HighScoreModel({
                            id: 'test'
                        }),
                        view = new HighScoreView({
                            model: model
                        });

                    runs(function() {
                        model.fetch().done(
                            function() {
                                view.render();
                                fetchDone = true;
                            });
                    });

                    waitsFor(function() {
                        return fetchDone;
                    }, "model was fetched and view rendered", 5000);

                    runs(function() {
                        expect($('#main')).toContainText('settlers of catan');
                    });

                });
            });
        });
    });
});