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
            "updatedAt": "2015-04-15T15:07:05.565Z",
            "id": "552e7e99bc47d5996c89215e"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:06.845Z",
            "updatedAt": "2015-04-15T15:07:06.845Z",
            "id": "552e7e9abc47d5996c89215f"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:07.856Z",
            "updatedAt": "2015-04-15T15:07:07.856Z",
            "id": "552e7e9bbc47d5996c892160"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:09.138Z",
            "updatedAt": "2015-04-15T15:07:09.138Z",
            "id": "552e7e9dbc47d5996c892161"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:10.146Z",
            "updatedAt": "2015-04-15T15:07:10.146Z",
            "id": "552e7e9ebc47d5996c892162"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:11.428Z",
            "updatedAt": "2015-04-15T15:07:11.428Z",
            "id": "552e7e9fbc47d5996c892163"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:12.437Z",
            "updatedAt": "2015-04-15T15:07:12.437Z",
            "id": "552e7ea0bc47d5996c892164"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:13.718Z",
            "updatedAt": "2015-04-15T15:07:13.718Z",
            "id": "552e7ea1bc47d5996c892165"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:14.726Z",
            "updatedAt": "2015-04-15T15:07:14.726Z",
            "id": "552e7ea2bc47d5996c892166"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:16.012Z",
            "updatedAt": "2015-04-15T15:07:16.012Z",
            "id": "552e7ea4bc47d5996c892167"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:17.020Z",
            "updatedAt": "2015-04-15T15:07:17.020Z",
            "id": "552e7ea5bc47d5996c892168"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:18.302Z",
            "updatedAt": "2015-04-15T15:07:18.302Z",
            "id": "552e7ea6bc47d5996c892169"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:19.310Z",
            "updatedAt": "2015-04-15T15:07:19.310Z",
            "id": "552e7ea7bc47d5996c89216a"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:20.592Z",
            "updatedAt": "2015-04-15T15:07:20.592Z",
            "id": "552e7ea8bc47d5996c89216b"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:21.600Z",
            "updatedAt": "2015-04-15T15:07:21.600Z",
            "id": "552e7ea9bc47d5996c89216c"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:22.886Z",
            "updatedAt": "2015-04-15T15:07:22.886Z",
            "id": "552e7eaabc47d5996c89216d"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:23.894Z",
            "updatedAt": "2015-04-15T15:07:23.894Z",
            "id": "552e7eabbc47d5996c89216e"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:25.175Z",
            "updatedAt": "2015-04-15T15:07:25.175Z",
            "id": "552e7eadbc47d5996c89216f"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:26.183Z",
            "updatedAt": "2015-04-15T15:07:26.183Z",
            "id": "552e7eaebc47d5996c892170"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:27.465Z",
            "updatedAt": "2015-04-15T15:07:27.465Z",
            "id": "552e7eafbc47d5996c892171"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:28.473Z",
            "updatedAt": "2015-04-15T15:07:28.473Z",
            "id": "552e7eb0bc47d5996c892172"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:29.759Z",
            "updatedAt": "2015-04-15T15:07:29.759Z",
            "id": "552e7eb1bc47d5996c892173"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:30.767Z",
            "updatedAt": "2015-04-15T15:07:30.767Z",
            "id": "552e7eb2bc47d5996c892174"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:32.049Z",
            "updatedAt": "2015-04-15T15:07:32.049Z",
            "id": "552e7eb4bc47d5996c892175"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:33.057Z",
            "updatedAt": "2015-04-15T15:07:33.057Z",
            "id": "552e7eb5bc47d5996c892176"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:34.339Z",
            "updatedAt": "2015-04-15T15:07:34.339Z",
            "id": "552e7eb6bc47d5996c892177"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:35.347Z",
            "updatedAt": "2015-04-15T15:07:35.347Z",
            "id": "552e7eb7bc47d5996c892178"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:36.633Z",
            "updatedAt": "2015-04-15T15:07:36.633Z",
            "id": "552e7eb8bc47d5996c892179"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:37.641Z",
            "updatedAt": "2015-04-15T15:07:37.641Z",
            "id": "552e7eb9bc47d5996c89217a"
          },
          {
            "humidity": 44,
            "temperature": 24,
            "sound": 64,
            "vibration": 1,
            "createdAt": "2015-04-15T15:07:38.923Z",
            "updatedAt": "2015-04-15T15:07:38.923Z",
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
                console.log(item.updatedAt, getTime(+moment(item.updatedAt)));
                return {x: getTime(+moment(item.updatedAt)), y: item.humidity}
              })
            },
            {
              name: 'sound',
              data: _.map(initData, function (item) {
                return {x: getTime(+moment(item.updatedAt)), y: item.sound}
              })
            },
            {
              name: 'temperature',
              data: _.map(initData, function (item) {
                return {x: getTime(+moment(item.updatedAt)), y: item.temperature}
              })
            },
            {
              name: 'vibration',
              data: _.map(initData, function (item) {
                return {x: getTime(+moment(item.updatedAt)), y: item.vibration}
              })
            }]
        });
      }
    };
  })
;

