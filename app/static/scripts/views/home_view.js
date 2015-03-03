/*

Home View

*/

define([
  'jquery',     // libs/jquery
  'underscore', // libs/underscore
  'backbone',   // libs/backbone
  'text!templates/home_view.html'
],function($, _, Backbone, homeViewTemplate) {

  var homeView = Backbone.View.extend({

    template: _.template(homeViewTemplate),

    initialize: function() {
    },

    render: function(){
      var self = this;
      this.$el.append(this.template);
      setTimeout(self.typeOut(60), 2500);
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
  return homeView;

});