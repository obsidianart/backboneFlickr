define([
    'jquery',
    'underscore',
    'backbone',
    'collections/flickrPhotos',
    'views/photo',
    'text!templates/album.html'
], function(
    $,
    _,
    Backbone,
    Photos,
    PhotoView,
    AlbumTemplate
) {
    var AlbumView = Backbone.View.extend({
        albumTemplate: _.template(AlbumTemplate),
        events: {
            "click .pagination .next" : "nextPage",
            "click .pagination .prev" : "prevPage",
        },
        initialize: function(options) {
            this.photos = new Photos();
            this.photos.setOptions(options);
            
            this.initListeners();
            
            this.render();

            this.photos.fetch();
        },

        initListeners:function(){
            this.photos.on('add',this.addPhoto,this);
            this.photos.on('remove',this.removePhoto,this);

        },

        stopListeners:function(){
            this.photos.off('add',this.addPhoto,this);
            this.photos.off('remove',this.removePhoto,this);
        },
        
        render: function() {
            this.$el.html(this.albumTemplate());
            this.$photos = this.$el.find('.photos');
        },

        nextPage:function(e){
            e.preventDefault();
            this.photos.nextPage();

            //TODO: move on sync
            Backbone.history.navigate("album/:"+this.photos.search+"/p:"+this.photos.page);
        },

        prevPage:function(e){
            e.preventDefault();
            this.photos.previousPage();

            //TODO: move on sync
            Backbone.history.navigate("album/:"+this.photos.search+"/p:"+this.photos.page);
        },

        addPhoto: function(photo){
            this.$photos.append(new PhotoView({model:photo}).el);
        },

        //TODO: study if is correct to remove it this way;
        removePhoto:function(photo){
            this.$el.find('#_'+photo.id).remove();
        },

        close: function() {
            this.remove();
            this.unbind();
            this.stopListeners();
        },
    });

    return AlbumView;
});