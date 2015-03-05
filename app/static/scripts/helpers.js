define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  Backbone.View.prototype.typeOut = function(speed) {

    console.log('extended');

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
