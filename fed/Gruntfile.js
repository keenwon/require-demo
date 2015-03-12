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
                    baseUrl: '<%= yeoman.app %>',
                    dir: '<%= yeoman.dist %>/js/app',
                    modules: [
                        {
                            name: 'home/main'
                        }
                    ]
                }
            }
        },

        copy: {
            app: {
                files: [
                    {
                        expand: true,
                        flatten: false,
                        src: ['js/require-config.js'],
                        dest: '<%= yeoman.dist %>/',
                        rename: function () {
                            return 'dist/js/require-config.js';
                        }
                    }
                ]
            }
        },

        uglify: {
            app: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= yeoman.dist %>/',
                        src: ['js/require-config.js'],
                        dest: '<%= yeoman.dist %>/',
                        ext: '.js'
                    }
                ]
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
                'dist/js/app/build.txt',
                'dist/js/app/common'
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
    grunt.registerTask('build', ['jshint', 'requirejs', 'copy', 'uglify', 'cssmin', 'clean']);
};
