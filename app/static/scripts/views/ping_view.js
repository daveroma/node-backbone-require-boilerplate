/*

Home View

*/

define([
  'jquery',
  'underscore',
  'backbone',
  'helpers',
  'text!templates/ping_view.html'
],function($, _, Backbone, helpers, pingViewTemplate) {

  var PingView = Backbone.View.extend({

    id: 'ping',

    pingTemplate: _.template(pingViewTemplate),

    render: function(){
      var self = this;
      console.log('pingView.js: render() was called');
      this.$el.html(this.pingTemplate);
      setTimeout(this.typeOut(60), 2500);
      return this;
    }

  });

  // return the view to the main application
  return PingView;

});