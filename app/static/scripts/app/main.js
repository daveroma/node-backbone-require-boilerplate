var App = (function() {

  var $el = $(el);

  return {

    typeOut: function() {
      var i = 0;
      var words = $el.find('span');
      var $cursor = $el.find('.cursor');

      $cursor.removeClass('blink');

      var type = setInterval(function() {
        $(words.get(i)).addClass('visible');
        if(++i == words.length) {
          clearInterval(type);
          $cursor.addClass('blink');
        }
      }, speed);
    },

    init: function() {
      setTimeout(this.typeOut(), 2500);
    }

  }
}();

var app = App();