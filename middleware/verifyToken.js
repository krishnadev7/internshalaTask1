const jwt = require('jsonwebtoken');

const verifyToken = async (req, res, next) => {
  const token = req.header('access-token');
  if (!token) return res.status(403).send('Sorry, Access Denied!');
  try {
    const verified = jwt.verify(token, process.env.JWT_SEC);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid Token!');
  }
};

module.exports = verifyToken;
