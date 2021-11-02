// Description:
//
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//

const request = require('request');

module.exports = (robot) => {
  return robot.hear(/weather (.*)/i, (msg) => {
    const place = msg.match[1];

    const options = {
      method: 'GET',
      url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=870b1b10b58578f725b70b13aff6c357&units=metric`,
    };

    request(options, (error, response) => {
      if (error) {
        return msg.send(error);
      }

      const condition = JSON.parse(response.body);

      const {
        main: { temp },
        wind: { speed },
        weather,
      } = condition;

      const message = `*Condition:* ${weather[0].description}\n*Temperature:* ${temp}ºC\n*Wind:* ${speed}Km/h`;
      return msg.send(message);
    });
  });
}; // end module exports
