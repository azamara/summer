var config = require('../../config');
var sails = require('sails');
var is = require('is_js');
var _ = require('lodash');
var serialPort = require('serialport');
var SerialPort = serialPort.SerialPort;
var btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

var Arduino = {
  sensor: function (Model) {
    var _this = this;
    serialPort = [];

    _.forEach(config.serialPorts, function (port, i) {
      serialPort[i] = require('serialport')
      serialPort[i] = new SerialPort(port, {
        baudrate: 9600,
        parser: serialPort[i].parsers.readline('\n')
      }, false);

      serialPort[i].open(function (error) {
        if (error) {
          console.log('failed to open: ' + error);
        } else {
          serialPort[i].on('data', function (data) {
            try {
              var item = JSON.parse(data);
              console.log('Location ' + item.location + ': ' + data);
              _this.create(Model, item);
            } catch (e) {
              console.log(e);
            }
          });
        }
      });
    });
  },
  create: function (Model, item) {
    Model.create(item).exec(function (err, item) {
      if (err) {
        console.log('error', err)
      } else {
        _.delay(function() {
          Model.publishCreate(_.extend({
            verb: 'created'
          }, item));
        }, 16);
      }
    });
  }
};
//Arduino.sensor({});
module.exports = Arduino;
