const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtGenerator = (user_id) => {
  const payload = {
    user: {
      id: user_id,
    },
  };

  // the code below was old version on implementation for jsonwebtoken
  //   const payload = {
  //     user: user_id,
  //   };

  console.log(payload, process.env.JWT_SECRET);

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = jwtGenerator;
