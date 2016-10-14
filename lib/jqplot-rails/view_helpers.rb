module Jqplot::Rails
  module ViewHelpers
    def jqplot(height, width, data_series, options={}, data_name=nil)
      dom_id = SecureRandom.hex(12)
      height = height.is_a?(String) ? height : "#{height}px"
      width = width.is_a?(String) ? width : "#{width}px"
      data_hash = {series: data_series, options: options, role: 'jqplot'}
      data_hash.merge!({name: data_name}) if data_name
      content_tag :div, nil, data: data_hash,
        id: dom_id, style: "height:#{height};width:#{width}"
    end
  end
end
