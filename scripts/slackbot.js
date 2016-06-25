module.exports = function(robot) {

  return robot.hear(/hi (.*)/i, function(msg) {
    // console.log(msg);
    return msg.send(`Hi ${msg.match[1]}`);
  });
};
