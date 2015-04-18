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

    if (config.serialPort === '/dev/cu.usbmodem1431') {
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
    }

    btSerial.on('found', function (address, name) {
      console.log('Bluetooth device: ' + address, name);
      if (address === '98-d3-31-60-2d-08') {
        btSerial.findSerialPortChannel(address, function (channel) {
          console.log('find bluetooth device: ' + address);
          btSerial.connect(address, channel, function () {
            console.log('connected');

            btSerial.write(new Buffer('my data', 'utf-8'), function (err, bytesWritten) {
              if (err) console.log(err);
            });

            var result = '';
            btSerial.on('data', function (buffer) {
              buffer = buffer.toString('utf-8') || '';
              result += buffer;

              if (is.include(buffer, '}')) {
                try {
                  result = _.trim(result);
                  console.log(result);
                  var item = JSON.parse(result);
                  _this.create(Model, item);
                } catch (e) {
                  console.log(e);
                }

                result = '';
              }
            });
          }, function () {
            btSerial.inquire();
            console.log('cannot connect');
          });

          // close the connection when you're ready
          btSerial.close();
        }, function () {
          btSerial.inquire();
          console.log('found nothing');
        });
      }
    });

    btSerial.inquire();
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
//Arduino.sensor({});
module.exports = Arduino;
