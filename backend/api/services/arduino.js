var sails = require('sails');
var is = require('is_js');
var serialPort = require('serialport');
var SerialPort = serialPort.SerialPort;
var _ = require('lodash');

module.exports = {
  temperature: function(Model) {
    var _this = this;
    serialPort = new SerialPort('/dev/cu.usbmodem141211', {
      baudrate: 9600,
      parser: serialPort.parsers.readline('\n')
    }, false); // this is the openImmediately flag [default is true]

    serialPort.open(function (error) {
      if (error) {
        console.log('failed to open: ' + error);
      } else {
        serialPort.on('data', function (data) {
          var celsius = +data;

          if(is.number(celsius)) {
            var item = {
              time: new Date(),
              value: +data
            };
            _this.create(Model, item);
          }
        });
      }
    });
  },
  create: function(Model, item) {
    Model.create(item).exec(function (err, item) {
      if(err) {
        console.log('error', err)
      } else {
        Model.publishCreate(_.extend({
          verb: 'created'
        }, item));
        //sails.sockets.emit('temperature', 'message',  {from: Math.random(), msg: 'Hi!'});
        //console.log("working", post);
      }
    });
  }
};
