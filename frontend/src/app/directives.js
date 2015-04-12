angular.module('summer')
  .directive('mwChart', function ($interval) {
    return {
      restrict: 'EA',
      link: function(scope, element) {
        Highcharts.setOptions({
          global: {
            useUTC: false
          }
        });

        element.highcharts({
          chart: {
            type: 'spline',
            events: {
              load: function () {
                // set up the updating of the chart each second
                var series = this.series[0];
                $interval(function () {
                  var item = scope.currentItem;
                  if(is.propertyDefined(item, 'time')) {
                    series.addPoint([+moment(item.time), item.value], true, true);
                  } else {
                    series.addPoint([+moment(), null], true, true);
                  }
                }, 1000);
              }
            }
          },
          title: {
            text: 'Home Temperature'
          },
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            min: 0,
            max: 30,
            title: {
              text: '%'
            }
          },
          legend: {
            enabled: false
          },
          exporting: {
            enabled: false
          },
          series: [{
            name: 'Temperature',
            data: (function () {
              // generate an array of random data
              var data = [],
              time = (new Date()).getTime(),
              i;

              for (i = -19; i <= 0; i += 1) {
                data.push([
                  time + i * 1000,
                  Math.random() * 20
                ]);
              }
              return data;
            }())
          }]
        });
      }
    };
  })
;

