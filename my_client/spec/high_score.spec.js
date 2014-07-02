/*global describe, it */
'use strict';

// define(['view'], function(HighScoreView) {
//     describe('Integration test', function() {
//         describe('displaying scores', function() {
//             it('should fetch and render correctly from my_api', function() {
//                 expect(new HighScoreView).toBeDefined();
//             });
//         });
//     });
// });

define(function(require) {
  'use strict';

  require('jquery');
  require('underscore');
  require('handlebars');

  describe('just checking', function() {
        it('works for underscore', function() {
            // just checking that _ works
            expect(_.size([1, 2, 3])).toEqual(3);
        });
        it('works for handlebars', function() {
            // just checking that _ works
            expect(Handlebars.compile('<div></div>')).toBeDefined();
        });
    });
});
