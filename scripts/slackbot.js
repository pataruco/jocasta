module.exports = function(robot) {
  return robot.hear(/hi (.*)/i, function(msg) {
    return msg.send(`Hi ${msg.match[1]}`);
  });
};
