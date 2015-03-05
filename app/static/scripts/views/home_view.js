define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home_view.html'
], function($, _, Backbone, homeViewTemplate) {

  var HomeView = Backbone.View.extend({

    id: 'home',

    homeTemplate: _.template(homeViewTemplate),

    render: function(template){
      var self = this;
      console.log('homeView.js: render() was called');
      this.$el.html(this.homeTemplate);
      setTimeout(self.typeOut(40), 2500);
      return this;
    }

  });

  // return the view to the main application
  return HomeView;

});