module.exports = function (grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.config.merge({
    mochaTest: {
      // Configure a mochaTest task
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['test/**/*.spec.js']
      }
    },
    watch: {
      test: {

        // Assets to watch:
        files: ['api/**/*', 'config/**/*', 'test/**/*.js'],

        tasks: ['test']
      }
    }
  });


  grunt.registerTask('test', 'mochaTest');
  grunt.registerTask('test:watch', 'watch:test');

};
