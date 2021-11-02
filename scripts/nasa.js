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

const getYesterdayYYMMDD = () => {
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  const yesterdayYYMMDD = yesterday.toISOString().split('T')[0];
  return yesterdayYYMMDD;
};

const yesterday = getYesterdayYYMMDD();

const options = {
  method: 'GET',
  url: `https://api.nasa.gov/planetary/apod?date=${yesterday}&hd=True&api_key=2QpdglwknKEulDdCV5ozKtmsme1fkk8d9gWb7Lnd`,
};

module.exports = (robot) => {
  return robot.hear(/nasa/i, (msg) => {
    request(options, (error, response) => {
      if (error) {
        return msg.send(error);
      }
      const nasa = JSON.parse(response.body);
      const message = `*Title:* ${nasa.title}\n*Description:* ${nasa.explanation}\n${nasa.url}`;
      return msg.send(message);
    });
  });
};
