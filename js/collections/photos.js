// Photo Collection

define([
  'underscore', 
  'backbone',
  'models/photo'
], function(
  _,
  Backbone,
  Photo
){

  var Photos = Backbone.Collection.extend({
    // Reference to this collection's model.
    model: Photo,

    initialize: function(options) {

    },
    setOptions : function(options) {
        this.search = options.query;
        this.page = options.page || 1;
        this.perPage = options.perPage || 10;
        this.availablePages = 1;
    },

    nextPage: function() {
      this.goToPage(parseInt(this.page)+1);
    },

    previousPage: function(){
      this.goToPage(parseInt(this.page)-1);
    },

    goToPage: function(page){
      if (page<1) page = 1;
      if (page>this.availablePages) page=this.availablePages;
      this.page = page;
      this.fetch();
    },

    ifFirstPage:function(){
      return page===1;
    },

    isLastPage:function(){
      return page===this.availablePages;
    },

    close:function(){
      this.remove();
    }

  });
  return Photos;
});
