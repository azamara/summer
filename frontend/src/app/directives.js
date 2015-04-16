angular.module('summer')
  .directive('mwChart', function ($interval) {
    return {
      restrict: 'EA',
      link: function (scope, element) {
        Highcharts.setOptions({
          global: {
            useUTC: false
          }
        });

        var initData = _.map(_.range(30), function(item) {
          return {
            "humidity": 1,
            "temperature": 1,
            "sound": 1,
            "vibration": 1,
            "updatedAt": +moment().add({second: item - 24})
          };
        });
        var getTime = function (time) {
          time = moment(time).format('YYYY.MM.DD HH:mm:ss');
          return +moment(time, 'YYYY-MM-DD HH:mm:ss');
        };
        element.highcharts('StockChart', {
          chart: {
            type: 'areaspline',
            events: {
              load: function () {
                var series = this.series;
                $interval(function () {
                  var item = scope.currentItem;
                  _.forEach(series, function (_item) {
                    if (is.propertyDefined(item, 'updatedAt')) {
                      _item.addPoint([getTime(+moment(item.updatedAt)), item[_item.name]], true, true);
                    } else {
                      _item.addPoint([+moment(), null], true, true);
                    }
                  });
                }, 1000);
              }
            }
          },
          title: {
            text: 'Sensor'
          },
          exporting: {
            enabled: false
          },
          scrollbar: {
            enabled: false
          },
          navigator: {
            enabled: false
          },
          rangeSelector: {
            enabled: false
          },
          xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
              second: '%H:%M',
              minute: '%H:%M',
              hour: '%H:%M',
              day: '%Y-%m-%e',
              week: '%Y-%m-%e',
              month: '%Y-%m',
              year: '%Y'
            }
          },
          yAxis: {
            labels: {
              formatter: function () {
                return Highcharts.numberFormat(this.value, 2);
              },
              align: 'right',
              x: -5,
              y: 0
            },
            min: 0
          },

          series: [
            {
              name: 'humidity',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.humidity}
              })
            },
            {
              name: 'sound',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.sound}
              })
            },
            {
              name: 'temperature',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.temperature}
              })
            },
            {
              name: 'vibration',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.vibration}
              })
            }]
        });
      }
    };
  })
;

