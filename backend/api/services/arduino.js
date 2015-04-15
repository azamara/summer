var config = require('../../config');
var sails = require('sails');
var is = require('is_js');
var serialPort = require('serialport');
var SerialPort = serialPort.SerialPort;
var _ = require('lodash');

module.exports = {
  sensor: function (Model) {
    var _this = this;
    serialPort = new SerialPort(config.serialPort, {
      baudrate: 9600,
      parser: serialPort.parsers.readline('\n')
    }, false); // this is the openImmediately flag [default is true]

    serialPort.open(function (error) {
      if (error) {
        console.log('failed to open: ' + error);
      } else {
        serialPort.on('data', function (data) {
          try {
            var item = JSON.parse(data);
            _this.create(Model, item);
          } catch (e) {
            console.log(e);
          }
        });
      }
    });
  },
  create: function (Model, item) {
    Model.create(item).exec(function (err, item) {
      if (err) {
        console.log('error', err)
      } else {
        Model.publishCreate(_.extend({
          verb: 'created'
        }, item));
      }
    });
  }
};
