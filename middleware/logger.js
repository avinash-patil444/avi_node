
const moment = require('moment');

//middleware
const logger = (req, res, next) => {
  console.log("Hello");
  console.log(`${req.protocol}://${req.get('host')}
  ${req.originalUrl}: 
  ${moment().format()}`)
next();
}

module.exports = logger; //export this module to use it in index.js for logging puproseas a middleware.