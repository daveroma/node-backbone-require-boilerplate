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
    }

  });

  // return the view to the main application
  return AboutView;

});