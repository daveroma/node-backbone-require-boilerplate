/*

Main application

*/


define(['router'], function(Router) {

  var initialize = function(){
    Router.initialize();
  }

  // Expose methods to the main application
  return {
    initialize: initialize
  }

});

