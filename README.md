# jqplot-rails

Bundled up the latest version of jqplot into something useable with the Rails 3.1 asset pipeline

## Usage

include the Gem in your gemfile

    gem 'jqplot-rails'

Then include the css and js in your application.{js,css} in your Rails application

application.css:

    *= require jqplot

application.js:

    //= require jquery
    //= require jquery_ujs
    //= require jqplot

and optional plugins in application.js:

    //= require jqplot/plugins/dateAxisRenderer

after a quick `bundle install` you should be good to go.

To create a graph in a view, you can use JS or use the following helper

    <%= jqplot height, width, data_series, options %>

like in this example

    <%= jqplot 200, 400, [[1, 2, 3, 4], [4, 3, 2, 1]], {legend: {show: true}} %>

This helper is based on code from https://github.com/Guidecase/jqplot-rails

## Note on Patches/Pull Requests

- Fork the project.
- Make your feature addition or bug fix
- Commit, do not mess with gemspec or version. (if you want to have your own version, that is fine but bump version in a commit by itself I can ignore when I pull)
- Send a pull request

To upgrade the JQPlot library

  1. Download the JQPlot files from https://bitbucket.org/cleonello/jqplot/downloads/
  2. Rename the plugin files from the terminal and remove minified files
  
  ```
  cd plugins
  rename -v 's/jqplot\.(.*)\.js+/$1.js/' *
  rm *.min.js
  ```
  3. Copy the files specified below into their appropriate /vendor/assets/ folders
  
    a) javascripts/jqplot/jquery.jqplot.js

    b) javascripts/jqplot/excanvas.js
    
    c) javascripts/jqplot/plugins/*
    
    d) stylesheets/jqplot/jquery.jplot.css
