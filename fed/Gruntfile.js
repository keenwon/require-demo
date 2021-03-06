'use strict';

module.exports = function (grunt) {
    var config = {
        app: 'js/app',
        css: 'css',
        dist: 'dist'
    };

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cfg: grunt.file.readJSON('fed.json'),
        yeoman: config,

        jshint: {
            options: {
                "jshintrc": ".jshintrc"
            },
            app: ['<%= yeoman.app %>/**/*.js']
        },

        requirejs: {
            compile: {
                options: {
                    mainConfigFile: "./js/require-config.js",
                    /**
                     * 覆盖mainConfigFile里的baseUrl
                     * require-config.js 的baseUrl是根据当前url计算的，所以以'/'开头
                     * Gruntfile.js 的baseUrl是根据本地磁盘计算的
                     */
                    appDir: 'js',
                    baseUrl: 'app',
                    dir: 'dist/js',
                    modules: [
                        {
                            name: 'home/main'
                        },
                        {
                            name: 'list/main'
                        }
                    ]
                }
            }
        },

        cssmin: {
            app: {
                files: {
                    '<%= yeoman.dist %>/css/style.min.css': [
                        'css/normalize.css',
                        'css/style.css'
                    ]
                }
            }
        },

        clean: {
            app: [
                'dist/js/build.txt',
                'dist/js/app/common',
                'dist/js/require-config.js',
                'dist/js/**/*.hbs'
            ]
        },

        fed: {
            server: {
                config: 'fed.json'
            }
        }
    });

    grunt.registerTask('default', ['fed']);
    grunt.registerTask('server', ['fed']);
    grunt.registerTask('build', ['jshint', 'requirejs', 'cssmin', 'clean']);
};
