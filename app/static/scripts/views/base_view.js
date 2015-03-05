/*

Home View

*/

define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'views/_manager',
  'views/home_view',
  'views/ping_view'
],
function($, _, Backbone, Router, ViewManager, HomeView, PingView) {

  var BaseView = Backbone.View.extend({

    events: {
      'click .nav-item': 'ping'
    },

    ping: function() {
      Backbone.history.navigate('ping', {trigger: true});
    },

    initialize: function() {

      // Add the views to an object that can be referenced by
      // other modules like the router.js
      ViewManager.baseView = this;
      ViewManager.homeView = new HomeView();
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