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
module.exports = (robot) => {
  return robot.hear(/(hi|hola)/gim, (msg) => {
    return msg.send('👋');
  });
};
