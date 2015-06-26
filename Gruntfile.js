module.exports = function(grunt){

  var init = {};

  init.pkg = grunt.file.readJSON('package.json');
  init.nodemon = {
                  dev: {
                    script: 'app.js'
                  }
                };

  init.watch = {

                    css:{
                      files: ['**/*.scss'],
                      tasks: ['sass'],
                      options: {livereload: true}
                    },
                    js:{
                      files: ['public/**/*.js', 'server/**/*.js', 'database/**/*.js'],
                      tasks: ['jshint'],
                      options: {livereload: true}
                    }

                };

  init.jshint = {
                  all: ['public/**/*.js', 'server/**/*.js', 'database/**/*.js', '!public/libs/**']
                };

  init.concurrent = {
                      target: {
                        options: {
                          logConcurrentOutput: true
                        },
                        tasks: ['nodemon', 'watchcssandjs']
                      }
                    };

  init.sass = {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        './public/index.css': './public/css/compileThis.scss'
      }
    }
  };

  grunt.initConfig(init);


  //load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-sass');


  grunt.registerTask('serve', ['jshint','sass','concurrent:target']);
  grunt.registerTask('watchcssandjs', ['watch:css','watch:js']);


  //TODO add grunt publish



}
