define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/photo.html'
], function(
    $,
    _,
    Backbone,
    PhotoTemplate
) {
    var AlbumView = Backbone.View.extend({
        photoTemplate: _.template(PhotoTemplate),
        tagName: "li",
        className: "thumbnail photo",
        id: function(){
            return "_" + this.model.id;
        },
        
        initialize: function() {
            this.render();
        },
        
        render: function() {
            this.$el.html(this.photoTemplate({photo:this.model}));
        },

        close: function() {
            this.remove();
        },

        search: function(e){
            e.preventDefault();
            
        }
    });

    return AlbumView;
});