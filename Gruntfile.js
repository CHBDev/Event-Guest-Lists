module.exports = function(grunt){
  // require('grunt-postcss')(grunt);

  var init = {};

  init.pkg = grunt.file.readJSON('package.json');
  init.nodemon = {
                  dev: {
                    script: 'server.js'
                  }
                };

  init.postcss = {
            options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['last 3 versions']
                    })
                ]
            },
            dist: {
                // src: ['public/css/*.scss', '!public/css/_normalize.scss', '!public/css/_reset.scss']
                src: 'public/css/finishedCompileStep1.scss'
            }
        };

  init.watch = {

                    css:{
                      files: ['**/*.scss'],
                      tasks: ['sass:step1', 'final-post-css', 'sass:step2'],
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
    step1: {
      options: {
        style: 'expanded'
      },
      files: {
        './public/css/finishedCompileStep1.scss': './public/css/compileStep1.scss'
      }
    },
    step2: {
      options: {
        style: 'expanded'
      },
      files: {
        './public/index.css': './public/css/compileStep2.scss'
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
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('final-post-css', ['postcss:dist']);


  grunt.registerTask('serve', ['jshint','sass:step1', 'final-post-css', 'sass:step2','concurrent:target']);
  grunt.registerTask('watchcssandjs', ['watch:css','watch:js']);

  grunt.registerTask('_git-push-azure', function(){
    grunt.util.spawn({
      cmd: ['git push azure master'],
      args: [''],
      opts: {stdio: 'inherit'}
    }, function done() {
      grunt.log.ok('Push Azure Done');
    });
  });

  grunt.registerTask('build', ['jshint','sass:step1', 'final-post-css', 'sass:step2']);

  //TODO add grunt publish



}
