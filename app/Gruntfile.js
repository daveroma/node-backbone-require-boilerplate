
module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  grunt.initConfig({

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: [
          {
            expand: true,         // Enable dynamic expansion.
            cwd: 'static/less/',  // Src matches are relative to this path.
            src: ['*.less'],      // Actual pattern(s) to match.
            dest: 'static/css/',  // Destination path prefix.
            ext: '.css'           // Dest filepaths will have this extension.
          }
        ]
      }
    },

    watch: {
      styles: {
        files: ['static/less/**/*.less'], // which files to watch
        tasks: ['newer:less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.registerTask('default', ['newer:less', 'watch']);

};