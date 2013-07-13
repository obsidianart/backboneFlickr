require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
    text: 'libs/require.text',
  }
});

require(['libs/domReady','app'], function( domReady, App){
	domReady(function(){
	  	App.initApplication({
        flickrAPI:"" //http://www.flickr.com/services/api/
      });
	});
});
