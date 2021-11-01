const ackbars = [
  'http://farm4.static.flickr.com/3572/3637082894_e23313f6fb_o.jpg',
  'http://farm6.staticflickr.com/5126/5725607070_b80e61b4b3_z.jpg',
  'http://farm6.static.flickr.com/5291/5542027315_ba79daabfb.jpg',
  'http://farm6.staticflickr.com/5250/5216539895_09f963f448_z.jpg',
  'https://i.chzbgr.com/maxW500/4930876416/hB0F640C6/',
  'http://farm2.staticflickr.com/1440/5170210261_fddb4c480c_z.jpg',
  'http://fashionablygeek.com/wp-content/uploads/2010/02/its-a-mouse-trap.jpg?cb5e28',
];

module.exports = (robot) => {
  return robot.hear(/it['’]?s a trap\b/i, (msg) => {
    return msg.send(msg.random(ackbars));
  });
};
