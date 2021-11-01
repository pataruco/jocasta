const request = require('request');

Date.prototype.yyyymmdd = function () {
  var mm = this.getMonth() + 1;
  var dd = this.getDate();

  return [this.getFullYear(), !mm[1] && '-0', mm, dd[1] && '0', '-' + dd].join(
    '',
  );
};

const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

const options = {
  method: 'GET',
  url: 'https://api.nasa.gov/planetary/apod',
  qs: {
    date: `${yesterday.yyyymmdd()}`,
    hd: 'True',
    api_key: '2QpdglwknKEulDdCV5ozKtmsme1fkk8d9gWb7Lnd',
  },
};

module.exports = (robot) => {
  return robot.hear(/nasa/i, (msg) => {
    options.qs.q = msg.match[1];
    request(options, (error, response, body) => {
      if (error) throw new Error(error);
      let nasa = JSON.parse(body);
      let message = `*Title:* ${nasa.title}\n*Description:* ${nasa.explanation}\n${nasa.url}`;
      return msg.send(message);
    });
  });
}; // end module exports
