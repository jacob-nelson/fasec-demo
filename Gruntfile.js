'use strict';


module.exports = function(grunt) {

  grunt.initConfig({
    fasec: {
      default: {
        options: {},
        files: {
          'javascript': ['**/*.js']
        }
      },
    },
  });

  grunt.loadNpmTasks('grunt-fasec');

  // Run security scanner
  grunt.registerTask('default', ['fasec']);
};
