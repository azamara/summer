'use strict';

angular.module('summer')
  .directive('mwChart', function () {
    return {
      restrict: 'EA',
      scope: {
        data: '=',
        currentItem: '='
      },
      link: function (scope, element, attrs) {
        var options = scope.$eval(attrs.options);
        Highcharts.setOptions({
          global: {
            useUTC: false
          }
        });

        var initData = scope.data;
        var getTime = function (time) {
          time = moment(time).format('YYYY.MM.DD HH:mm:ss');
          return +moment(time, 'YYYY-MM-DD HH:mm:ss');
        };
        var series;
        element.highcharts('StockChart', {
          chart: {
            type: 'areaspline'
          },
          title: {
            text: 'Sensor'
          },
          exporting: {
            enabled: false
          },
          legend: {
            enabled: true
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
              second: '%H:%M:%S',
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
              name: 'vibration',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.vibration};
              })
            },
            {
              name: 'sound',
              color: '#a88cd5',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.sound};
              })
            },
            {
              name: 'humidity',
              color: '#02baf2',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.humidity};
              })
            },
            {
              name: 'temperature',
              color: '#f84545',
              data: _.map(initData, function (item) {
                return {x: item.updatedAt, y: item.temperature};
              })
            }
          ]
        });

        scope.$watch('currentItem', function (value) {
          var item = value;
          if(item && series) {
            _.forEach(series, function (_item) {
              if (item && (options.location === +item.location)) {
                if (is.propertyDefined(item, 'updatedAt')) {
                  _item.addPoint([getTime(+moment(item.updatedAt)), item[_item.name]], true, true);
                }
              }
            });
          }
        });
      }
    };
  })
;

