
/*

This sets up configuration
and then kicks everything off by calling App's initialize method

*/

require.config({

  //By default load any module IDs from /scripts
  baseUrl       : 'scripts',

  // the left side is the module ID,
  // the right side is the path to
  // the jQuery file, relative to baseUrl.
  paths: {
    jquery      : 'libs/jquery',
    underscore  : 'libs/underscore',
    backbone    : 'libs/backbone',
    text        : 'libs/text',
    helpers     : 'helpers' // consider that this might not be in the right place
  },

  shim: {
    'underscore': {
      exports   : '_'
    },
    'backbone'  : {
      deps      : ['underscore', 'jquery'],
      exports   : 'Backbone'
    },
    'helper': {
       deps:['backbone']
    }
  },

});

require(['app'], function (App) {

  $(function() {

    // Start the main app logic.
    App.initialize();

  });

});