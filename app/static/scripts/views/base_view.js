define([
  'jquery',
  'underscore',
  'backbone',
  'router',               // Backbone Router
  'views/_manager',       // Handles page transitions and respective DOM/Event cleanup
  'views/home_view',      // Backbone view for /home
  'views/about_view',     // Backbone view for /about
  'views/contact_view',   // Backbone view for /contact
  'views/ping_view'       // Backbone view for /ping
], function($, _, Backbone, Router, ViewManager, HomeView, AboutView, ContactView, PingView) {

  var BaseView = Backbone.View.extend({

    events: {
      'click a': 'goToPage'
    },

    goToPage: function(e) {
      e.preventDefault();
      var location = e.currentTarget.getAttribute('href');
      Backbone.history.navigate(location, {trigger: true});
    },

    initialize: function() {

      // Add the views to an object that can be referenced by
      // other modules like the router.js
      ViewManager.baseView = this;
      ViewManager.homeView = new HomeView();
      ViewManager.aboutView = new AboutView();
      ViewManager.contactView = new ContactView();
      ViewManager.pingView = new PingView();

    }

  });

  var initialize = function() {
    var baseView = new BaseView({el: $('body')});
    baseView.render();
  }

  // return the view to the main application
  return {
    initialize: initialize
  }

});