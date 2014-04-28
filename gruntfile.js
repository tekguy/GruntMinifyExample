module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), //load configuration
         
        concat: {
            dist: {
                src: [
                'css/*.css'
                ],
                dest: 'css/build/production.css',
            }
        },
        cssmin: {
          minify: {
            expand: true,
            cwd: 'css/build',
            src: ['*.css', '!*.min.css'],
            dest: 'css/build',
            ext: '.min.css'
        }
    }
     
});
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['concat', 'cssmin']);
};