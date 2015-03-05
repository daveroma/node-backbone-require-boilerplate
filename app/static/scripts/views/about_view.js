/*

Home View

*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/about_view.html'
],function($, _, Backbone, aboutViewTemplate) {

  var AboutView = Backbone.View.extend({

    id: 'about',

    aboutTemplate: _.template(aboutViewTemplate),

    render: function(){
      var self = this;
      console.log('aboutView.js: render() was called');
      this.$el.html(this.aboutTemplate);
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
  return AboutView;

});