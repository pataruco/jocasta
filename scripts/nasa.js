const request = require('request');

const yesterdayDate = new Date(new Date().setDate(new Date().getDate() - 1));

const yesterday = yesterdayDate.toISOString().split('T')[0];

const options = {
  method: 'GET',
  url: 'https://api.nasa.gov/planetary/apod',
  qs: {
    date: `${yesterday}`,
    hd: 'True',
    api_key: '2QpdglwknKEulDdCV5ozKtmsme1fkk8d9gWb7Lnd',
  },
};

module.exports = (robot) => {
  return robot.hear(/nasa/i, (msg) => {
    options.qs.q = msg.match[1];
    request(options, (error, response) => {
      if (error) throw new Error(error);
      let nasa = JSON.parse(response.body);
      let message = `*Title:* ${nasa.title}\n*Description:* ${nasa.explanation}\n${nasa.url}`;
      return msg.send(message);
    });
  });
}; // end module exports
