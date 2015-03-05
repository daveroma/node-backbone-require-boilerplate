define([$], function(){

  return {

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

  }

});
