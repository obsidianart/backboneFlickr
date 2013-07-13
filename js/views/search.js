define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/search.html'
], function(
    $,
    _,
    Backbone,
    SearchTemplate
) {
    var SearchView = Backbone.View.extend({
        events: {
            "submit form": "search",
        },
        searchTemplate: _.template(SearchTemplate),
        initialize: function() {
            this.render();
        },
        
        render: function() {
            this.$el.html(this.searchTemplate());
        },

        close: function() {
            this.remove();
        },

        search: function(e){
            e.preventDefault();
            var searchValue = this.$el.find('input.search').val();
            if (searchValue) {
                 Backbone.history.navigate("album/:"+searchValue, {trigger: true});
            }
        }
    });

    return SearchView;
});