/*

Main application

*/


define(['jquery', 'underscore', 'backbone', 'views/home_view'], function($, _, Backbone, HomeView){

  var AppRouter = Backbone.Router.extend({

    routes: {
      ''          : 'index',
      '/index'    : 'about',
      '/about'    : 'about',
      '*actions'  : ''
    },

    index: function() {
      var homeView = new HomeView({el: $('#home')});
      homeView.render();
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