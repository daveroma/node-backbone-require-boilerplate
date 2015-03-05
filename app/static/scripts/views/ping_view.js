/*

Home View

*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/ping_view.html'
],function($, _, Backbone, pingViewTemplate) {

  var PingView = Backbone.View.extend({

    id: 'ping',

    pingTemplate: _.template(pingViewTemplate),

    render: function(){
      var self = this;
      console.log('pingView.js: render() was called');
      this.$el.html(this.pingTemplate);
      setTimeout(this.typeOut(60), 2500);
      return this;
    },

    typeOut: function(speed) {
      var i = 0;
      var $letters = this.$el.find('span');
      var $cursor = this.$el.find('.cursor');

      $cursor.removeClass('blink');

      var type = setInterval(function() {
        $($letters.get(i)).addClass('visible');
        if(++i == $letters.length) {
          clearInterval(type);
          $cursor.addClass('blink');
        }
      }, speed);
    }

  });

  // return the view to the main application
  return PingView;

});