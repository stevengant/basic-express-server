'use strict';


const validator = ( req, res, next ) => {
  const name = req.query.name;
  if(!name) {

    next('Error, no name entered');
  } 

  next();
};

module.exports = validator;