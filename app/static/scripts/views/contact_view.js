/*

Home View

*/

define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/contact_view.html'
],function($, _, Backbone, contactViewTemplate) {

  var ContactView = Backbone.View.extend({

    id: 'contact',

    contactTemplate: _.template(contactViewTemplate),

    render: function(){
      var self = this;
      console.log('contactView.js: render() was called');
      this.$el.html(this.contactTemplate);
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
  return ContactView;

});