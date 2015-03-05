/*

Home View

*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home_view.html'
],function($, _, Backbone, homeViewTemplate) {

  var HomeView = Backbone.View.extend({

    id: 'home',

    homeTemplate: _.template(homeViewTemplate),

    render: function(template){
      var self = this;
      console.log('homeView.js: render() was called');
      this.$el.html(this.homeTemplate);
      setTimeout(self.typeOut(40), 2500);
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
  return HomeView;

});