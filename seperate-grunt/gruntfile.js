"use strict";
    
  module.exports = function(grunt) {
    
      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
      });
      //loads the various task configuration files 
      var configs = require('load-grunt-configs')(grunt);
      grunt.initConfig(configs);

      // Load the plugin that provides the "uglify" task.
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-contrib-cssmin');
      grunt.loadNpmTasks('grunt-sass');
    
      // Default task(s).
      //grunt.registerTask('default', ['uglify', 'watch', 'cssmin']);

      grunt.registerTask('build', ['uglify', 'sass', 'cssmin']);
      grunt.registerTask('watchfile', ['watch']);
    };