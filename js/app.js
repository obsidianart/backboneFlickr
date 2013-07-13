//App, used to initialize the router
//In a complex application the app will manage the view creation instead of the router

define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function(
    $,
    _,
    Backbone,
    router,
    BookView
  ) {

  return {
    initApplication: function(options) {
      this.options = options;
      Backbone.history.start();
    }
  };
});