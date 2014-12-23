module.exports = function(grunt) {

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          beautify: true,
          // compress: { drop_console: true }
        },
        my_target: {
          files: {
            'public/js/app.min.js': ['javascript/app.js'],
          }
        }
      },

      jshint: {
        all: ['javascript/*js']
      },

      sass: {
        options: {
          includePaths: ['styles/bower_components/foundation/scss']
        },
        dist: {
          options: {
            outputStyle: 'compressed'
          },
          files: {
            'public/css/styles.css': 'styles/scss/app.scss'
          }        
        }
      },

      watch: {
        files: ['javascript/*.js', 'Gruntfile.js'],
        tasks: ['jshint', 'uglify', 'sass'] 
      },

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    // jshint first - lintify my input
    grunt.registerTask('default', ['jshint', 'uglify', 'sass', 'watch']);
};