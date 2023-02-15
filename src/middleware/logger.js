'use strict';

const logger = ( req, res, next ) => {
  console.log(`Log info: ${req.path}, ${req.method}`);
  next();

};

module.exports = logger;