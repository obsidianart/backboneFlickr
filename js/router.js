define([
    'jquery',
    'underscore',
    'backbone',
    'views/search',
    'views/album'
], function(
        $,
        _,
        Backbone,
        SearchView,
        AlbumView
    ) {

    var Router = Backbone.Router.extend({
        routes : {
            'album'                 : 'album',
            'album/:query'          : 'album',
            'album/:query/p:page'   : 'album',
            '*default'              : 'home'
        },

        album : function(query,page) {
            this.currentView && this.currentView.close();
            this.currentView = new AlbumView({
                query: query && query.substr(1),
                page: page && page.substr(1)
            });
            $("#main").html(this.currentView.el)
        },

        home: function() {
            this.currentView && this.currentView.close();
            this.currentView = new SearchView();
            $("#main").html(this.currentView.el)
        }


    });
    return new Router();
});