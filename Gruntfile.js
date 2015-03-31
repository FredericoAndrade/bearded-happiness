'use strict';

var
    LIVERELOAD_PORT = 35729,
    lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT}),
    mountFolder = function (connect, dir) {
        return connect.static(require('path').resolve(dir));
    };

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        emberTemplates: {
            compile: {
                options: {
                    templateBasePath: /templates\//
                },
                files: {
                  "js/dist/templates.js": "templates/**/*.hbs"
                }
            }
        },
        stylus: {
            compile: {
                options: {
                    paths: ['stylus/'],
                    import: ['../variables']
                },
                files: {
                    'css/style.css' : ['css/stylus/base.styl', 'css/stylus/*.styl'],
                }
            }
        },
        uglify: {
          my_target: {
            files: {
              "js/dist/app.js":  ["js/src/**/*.js"]
            }
          }
        },
        watch: {
            files: [
                'index.html',
                'js/**/*.js'
            ],
            ember_templates: {
                files: 'templates/**/*.hbs',
                tasks: ['emberTemplates']
            },
            stylus: {
                files: ['css/**/*.styl'],
                tasks: ['stylus']
            },
            uglify: {
                files: ["js/src/**/*.js"],
                tasks: ['uglify']
            },
            livereload: {
                options: { livereload: LIVERELOAD_PORT },
                files: ['css/style.css', 'index.html', 'js/**/*.js']
            }
        },
        connect: {
            options: {
                port: 5000,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    middleware: function( connect ) {
                        return [
                            lrSnippet,
                            mountFolder(connect, './')
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('server', function() {
        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('default', [
        'stylus',
        'uglify',
        'emberTemplates',
        'server'
    ]);
};
