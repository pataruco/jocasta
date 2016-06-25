let request = require('request');

var options = { method: 'GET',
                   url: 'http://api.openweathermap.org/data/2.5/weather',
                    qs: { q: '',
                      APPID: '4fd8ab9649f81ad2e6e9a02464bc6c3f' }
              };

module.exports = function(robot) {

  return robot.hear(/weather (.*)/i, function(msg) {
    options.qs.q = msg.match[1];

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      console.log(body);
    });

    return msg.send(`weather ${msg.match[1]}`);
  });

}; // end module exports
