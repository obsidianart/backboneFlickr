//Photo Model
//Manage a single photo

define([
  'underscore', 
  'backbone'
  ], function(_, Backbone){
    
  var Photo = Backbone.Model.extend({
    initialize: function() {
      this.render();
    },

    render: function(){

    },

    //returning title as flickr don't retrieve descriptions directly
    getDescription: function(){
      return this.get('title')
    },

    getUrlSmall: function(){
      return this.getUrl("_q")
    },

    getUrlMedium: function(){
      return this.getUrl("_z")
    },

    getUrlLarge: function(){
      return this.getUrl("_b")
     },

    getUrl: function(size) {
      return "http://farm" + this.get('farm') + ".static.flickr.com/" + this.get('server') + "/" +this.get('id') + "_" + this.get('secret') + size + ".jpg";
    }

  });
  return Photo;
});