"use strict";

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'myproject/src/<%= pkg.name %>.js',
        dest: 'myproject/build/js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', '**/*.scss'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'myproject/build/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'myproject/build/css/',
          ext: '.min.css'
        }]
      }
    },
    sass: {
      options: {
          sourceMap: true
      },
      dist: {
          files: {
              'myproject/build/css/style.css': 'myproject/src/sass/style.scss'
          }
      }
  },
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'myproject/index.html': 'myproject/big-index.html '   // 'destination': 'source'
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).

  grunt.registerTask('build', ['uglify', 'sass', 'cssmin', 'htmlmin']);
  grunt.registerTask('watchfile', ['watch']);
};