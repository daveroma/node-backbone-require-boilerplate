/*

Main application

*/


define([
  'jquery',
  'underscore',
  'backbone',
  'views/_manager' // this is where references to the Backbone views live
], function($, _, Backbone, ViewManager, BaseView){

  var AppRouter = Backbone.Router.extend({

    routes: {
      ''          : 'index',
      'index'     : 'about',
      'about'     : 'about',
      'contact'   : 'contact',
      'ping'      : 'ping',
      '*actions'  : 'index'
    },

    index: function() {
      // the showView method
      ViewManager.showView(ViewManager.homeView);
    },

    about: function() {
      // the showView method
      ViewManager.showView(ViewManager.aboutView);
    },

    contact: function() {
      // the showView method
      ViewManager.showView(ViewManager.contactView);
    },

    ping: function() {
      ViewManager.showView(ViewManager.pingView);
    }

  });

  var initialize = function(){

    var router = new AppRouter;

    Backbone.history.start({
      pushState: true // Push URL changes to the browsers history
    });

  };

  // Expose methods to the main application
  return {
    initialize: initialize
  };

});