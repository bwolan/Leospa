module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        files: {
          "styles/style-compiled.css": "styles/style.less"
        }
      }
    },
    watch: {
      files: ["styles/style.less"],
      tasks: ["less"]
    }
  });
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("default", ["less"]);
};
