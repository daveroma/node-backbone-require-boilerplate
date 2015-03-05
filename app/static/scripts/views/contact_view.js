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
    }

  });

  // return the view to the main application
  return ContactView;

});