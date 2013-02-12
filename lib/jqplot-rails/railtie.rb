module Jqplot
  module Rails
    class Railtie < ::Rails::Railtie
      initializer "jqplot-rails.include_helpers" do
        ActionView::Base.send :include, Jqplot::Rails::ViewHelpers
      end
    end
  end
end
