Gem::Specification.new do |s|
  s.name        = "jqplot-rails"
  s.version     = "0.3"
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Matt House"]
  s.email       = ["matt@eightbitraptor.com"]
  s.summary     = "JqPlot for Rails 3.1 asset pipeline"
  s.description = "JqPlot for Rails 3.1 asset pipeline"

  s.files         = Dir.glob("{vendor,lib}/**/*")
  s.require_paths = ["lib"]

  s.add_dependency "railties"
  s.add_development_dependency "bundler"
  s.add_development_dependency "rails"
end
