/**
* Sensor.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    humidity: 'float',
    temperature: 'float',
    sound: 'float',
    vibration: 'float',
    dust: 'float',
    location: 'int'
  }
};

