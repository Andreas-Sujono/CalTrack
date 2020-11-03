// Express automatically knows that this entire function is an error handling middleware by specifying 4 parameters
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // err is a class defined at /utils/appError.js
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};