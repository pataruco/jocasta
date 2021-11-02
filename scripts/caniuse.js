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

const caniuse = require('caniuse-api');

const Caniuse = require('../helpers/caniuse.js');

module.exports = (robot) => {
  return robot.hear(/caniuse (.*)/i, (msg) => {

     let arguments = msg.match[1];
     let caniuseResponse  = caniuse.getSupport(arguments, true);
     browser = new Caniuse(caniuseResponse);
     browser.supportedBrowsers();

     let message = `${browser.chrome()} ${browser.ie()} ${browser.edge()} ${browser.firefox()} ${browser.chromeAndroid()} ${browser.safari()} ${browser.opera()} ${browser.safariIos()}\n *More info* :arrow_forward:http://caniuse.com/#search=${arguments}`;
     return msg.send(message);
  });
};// end of robot
