// Photo Collection

define([
  'underscore', 
  'backbone',
  'models/flickrPhoto',
  'collections/photos'
], function(
  _,
  Backbone,
  FlickrPhoto,
  Photos
){

  var FlickrPhotos = Photos.extend({
    url: function(){
      var _url = "http://api.flickr.com/services/rest/?";
      if (this.search) {
        _url += "text="+encodeURI(this.search);
        _url += "&method=flickr.photos.search";
      } else {
        _url += "method=flickr.photos.getRecent";
      }
      
      _url += "&page="+this.page;
      _url += "&per_page="+this.perPage;
      
      _url += "&format=json";

      _url += "&api_key=";
      return _url;
    },

     model: FlickrPhoto,

    // Overwrite the sync method to work with jsonp
    sync: function(method, model, options) {
      var that = this;

      var params = _.extend({
        dataType : 'jsonp',
        jsonp : 'jsoncallback',
        url: that.url()
      }, options);

      return $.ajax(params);
    },

    parse: function(response) {
      this.availablePages = response.photos.pages;
      return response.photos.photo;
    }

  });
  return FlickrPhotos;
});
