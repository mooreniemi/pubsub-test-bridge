/*global require*/
'use strict';

require(['require_config'], function() {
    require([
        'backbone', 'router'
    ], function(Backbone, HighScoreRouter) {
        $(document).on("click", "a:not([data-bypass])", function(evt) {
            var href = {
                prop: $(this).prop("href"),
                attr: $(this).attr("href")
            };
            var root = location.protocol + "//" + location.host + Backbone.history.options.root;

            if (href.prop && href.prop.slice(0, root.length) === root) {
                evt.preventDefault();
                Backbone.history.navigate(href.attr, true);
            }
        });
        var appRouter = new HighScoreRouter();
        Backbone.history.start({
            pushState: true
        });
    });
});