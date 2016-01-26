module.exports = function (grunt) {

    grunt.initConfig({
        nodewebkit: {
            options: {
                platforms: ['win', 'osx'],
                buildDir: './build',
                version: '0.12.1'
            },
            src: [
                'index.html',
                'package.json',
                './public/**/*',
                './node_modules/mysql/**/*'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-node-webkit-builder');

    grunt.registerTask('build', ['nodewebkit']);

};
