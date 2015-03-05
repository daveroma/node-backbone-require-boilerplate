define([
  'views/base_view',
  'router'
], function(BaseView, Router){

  var initialize = function(){

    // init the base view
    BaseView.initialize();

    // init the router
    Router.initialize();

  }

  return {
    initialize: initialize
  }

});

