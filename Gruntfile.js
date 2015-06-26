module.exports = function(grunt){

  var init = {};

  init.pkg = grunt.file.readJSON('package.json');
  init.nodemon = {
                  dev: {
                    script: 'app.js'
                  }
                };

  init.jshint = {
                all: ['public/**/*.js', 'server/**/*.js', 'database/**/*.js']
                };

  init.concurrent = {
                      options: {
                          logConcurrentOutput: true
                        },
                        tasks: ['nodemon', 'watch']
                      };
  init.sass = {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        'index.css': './public/css/compileThis.scss',
      }
    }
  }

  grunt.initConfig(init);


  //load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('serve', ['jshint','sass','concurrent']);

  //TODO add grunt publish



}
