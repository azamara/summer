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

        var initData = [
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:05.565Z",
            "updatedAt": +moment().add({second: -28}),
            "id": "552e7e99bc47d5996c89215e"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:06.845Z",
            "updatedAt": +moment().add({second: -27}),
            "id": "552e7e9abc47d5996c89215f"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:07.856Z",
            "updatedAt": +moment().add({second: -26}),
            "id": "552e7e9bbc47d5996c892160"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:09.138Z",
            "updatedAt": +moment().add({second: -25}),
            "id": "552e7e9dbc47d5996c892161"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:10.146Z",
            "updatedAt": +moment().add({second: -24}),
            "id": "552e7e9ebc47d5996c892162"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:11.428Z",
            "updatedAt": +moment().add({second: -23}),
            "id": "552e7e9fbc47d5996c892163"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:12.437Z",
            "updatedAt": +moment().add({second: -22}),
            "id": "552e7ea0bc47d5996c892164"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:13.718Z",
            "updatedAt": +moment().add({second: -21}),
            "id": "552e7ea1bc47d5996c892165"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:14.726Z",
            "updatedAt": +moment().add({second: -20}),
            "id": "552e7ea2bc47d5996c892166"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:16.012Z",
            "updatedAt": +moment().add({second: -19}),
            "id": "552e7ea4bc47d5996c892167"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:17.020Z",
            "updatedAt": +moment().add({second: -18}),
            "id": "552e7ea5bc47d5996c892168"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:18.302Z",
            "updatedAt": +moment().add({second: -17}),
            "id": "552e7ea6bc47d5996c892169"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:19.310Z",
            "updatedAt": +moment().add({second: -16}),
            "id": "552e7ea7bc47d5996c89216a"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:20.592Z",
            "updatedAt": +moment().add({second: -15}),
            "id": "552e7ea8bc47d5996c89216b"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:21.600Z",
            "updatedAt": +moment().add({second: -14}),
            "id": "552e7ea9bc47d5996c89216c"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:22.886Z",
            "updatedAt": +moment().add({second: -13}),
            "id": "552e7eaabc47d5996c89216d"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:23.894Z",
            "updatedAt": +moment().add({second: -12}),
            "id": "552e7eabbc47d5996c89216e"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:25.175Z",
            "updatedAt": +moment().add({second: -11}),
            "id": "552e7eadbc47d5996c89216f"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:26.183Z",
            "updatedAt": +moment().add({second: -10}),
            "id": "552e7eaebc47d5996c892170"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:27.465Z",
            "updatedAt": +moment().add({second: -9}),
            "id": "552e7eafbc47d5996c892171"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:28.473Z",
            "updatedAt": +moment().add({second: -8}),
            "id": "552e7eb0bc47d5996c892172"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:29.759Z",
            "updatedAt": +moment().add({second: -7}),
            "id": "552e7eb1bc47d5996c892173"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:30.767Z",
            "updatedAt": +moment().add({second: -6}),
            "id": "552e7eb2bc47d5996c892174"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:32.049Z",
            "updatedAt": +moment().add({second: -5}),
            "id": "552e7eb4bc47d5996c892175"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:33.057Z",
            "updatedAt": +moment().add({second: -4}),
            "id": "552e7eb5bc47d5996c892176"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:34.339Z",
            "updatedAt": +moment().add({second: -3}),
            "id": "552e7eb6bc47d5996c892177"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:35.347Z",
            "updatedAt": +moment().add({second: 0}),
            "id": "552e7eb7bc47d5996c892178"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:36.633Z",
            "updatedAt": +moment().add({second: -2}),
            "id": "552e7eb8bc47d5996c892179"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:37.641Z",
            "updatedAt": +moment().add({second: -1}),
            "id": "552e7eb9bc47d5996c89217a"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:38.923Z",
            "updatedAt": +moment().add({second: 0}),
            "id": "552e7ebabc47d5996c89217b"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:38.923Z",
            "updatedAt": +moment().add({second: 1}),
            "id": "552e7ebabc47d5996c89217b"
          }
        ];
        var getTime = function (time) {
          time = moment(time).format('YYYY.MM.DD HH:mm:ss');
          return +moment(time, 'YYYY-MM-DD HH:mm:ss');
        };
        element.highcharts({
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
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
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

