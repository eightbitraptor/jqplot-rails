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
