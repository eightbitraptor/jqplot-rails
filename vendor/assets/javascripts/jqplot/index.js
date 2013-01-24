//= require_self
//= require ./jquery.jqplot
//= require ./excanvas

$(document).ready(function() {
  $('div[data-role="jqplot"]').each(function() {
    var options = $(this).data('options');

    // renderer options are JS objects
    // they must be eval'd
    if (options.axesDefaults &&
      typeof(options.axesDefaults.renderer) === 'string' &&
      options.axesDefaults.renderer.indexOf('$.') === 0) {
        options.axesDefaults.renderer = eval(options.axesDefaults.renderer)
      }
    if (options.axes) {
      if(options.axes.xaxis) {
        if(typeof(options.axes.xaxis.tickRenderer) === 'string' && options.axes.xaxis.tickRenderer.indexOf('$.') === 0) {
          options.axes.xaxis.tickRenderer = eval(options.axes.xaxis.tickRenderer)
        }
        if(typeof(options.axes.xaxis.renderer) === 'string' && options.axes.xaxis.renderer.indexOf('$.') === 0) {
          options.axes.xaxis.renderer = eval(options.axes.xaxis.renderer)
        }
      }
      if(options.axes.yaxis) {
        if(typeof(options.axes.yaxis.tickRenderer) === 'string' && options.axes.yaxis.tickRenderer.indexOf('$.') === 0) {
          options.axes.yaxis.tickRenderer = eval(options.axes.yaxis.tickRenderer)
        }
        if(typeof(options.axes.yaxis.renderer) === 'string' && options.axes.yaxis.renderer.indexOf('$.') === 0) {
          options.axes.yaxis.renderer = eval(options.axes.yaxis.renderer)
        }
      }
      if(options.axes.x2axis) {
        if(typeof(options.axes.x2axis.tickRenderer) === 'string' && options.axes.x2axis.tickRenderer.indexOf('$.') === 0) {
          options.axes.x2axis.tickRenderer = eval(options.axes.x2axis.tickRenderer)
        }
        if(typeof(options.axes.x2axis.renderer) === 'string' && options.axes.x2axis.renderer.indexOf('$.') === 0) {
          options.axes.x2axis.renderer = eval(options.axes.x2axis.renderer)
        }
      }
      if(options.axes.y2axis) {
        if(typeof(options.axes.y2axis.tickRenderer) === 'string' && options.axes.y2axis.tickRenderer.indexOf('$.') === 0) {
          options.axes.y2axis.tickRenderer = eval(options.axes.y2axis.tickRenderer)
        }
        if(typeof(options.axes.y2axis.renderer) === 'string' && options.axes.y2axis.renderer.indexOf('$.') === 0) {
          options.axes.y2axis.renderer = eval(options.axes.y2axis.renderer)
        }
      }
    }
    if (options.seriesDefaults &&
        typeof(options.seriesDefaults.renderer) === 'string' &&
        options.seriesDefaults.renderer.indexOf('$.') === 0) {
          options.seriesDefaults.renderer = eval(options.seriesDefaults.renderer)
        }
    if (options.series) {
      for(var i = 0, length = options.series.length; i < length; i++) {
        if (typeof(options.series[i].renderer) === 'string' && options.series[i].renderer.indexOf('$.') === 0) {
          options.series[i].renderer = eval(options.series[i].renderer)
        }
      }
    }

    // initialize the graph
    $.jqplot($(this).attr('id'), $(this).data('series'), options);
  });
});
