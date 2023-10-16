const mix = require('laravel-mix');

mix.js('assets/js/app.js', 'public/js/app.min.js')
    .css('assets/css/main.css', 'public/css/main.min.css');
