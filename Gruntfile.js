// wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    pkg: grunt.file.readJSON('package.json'),

    // compile less stylesheets to css -----------------------------------------
    less: {
      build: {
        files: {
          'assets/css/screen.css': 'assets/less/screen.less'
        }
      }
    },

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        sourceMap: true,
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'assets/css/screen.min.css': 'assets/css/screen.css'
        }
      }
    },

    // configure watch to auto update ----------------
    watch: {  
      // watch css and less files 
      files: ['assets/css/*.css', 'assets/less/*.less'], 
      tasks: ['less', 'cssmin']
    }

  });

  grunt.registerTask('default', ['cssmin', 'less']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

};