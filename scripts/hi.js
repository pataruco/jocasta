module.exports = (robot) => {
  return robot.hear(/(hi|hola)/gim, (msg) => {
    return msg.send('👋');
  });
};
