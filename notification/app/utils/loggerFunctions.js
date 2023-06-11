const { logger } = require("../utils/logger");

exports.catchErrorNotAuth = (action, message, error) => {
  console.error(error);
  const logObject = {
    action: action,
    message: message,
    errorMessage: error.message,
    errorStack: error.stack,
    errorType: error.name,
  };  
  logger.error(logObject);  
};
exports.catchErrorAuth = (action, message, error) => {
  console.error(error);
  const logObject = {
    action: action,
    message: message,
    errorMessage: error.message,
    errorStack: error.stack,
    errorType: error.name
  };  
  logger.error(logObject);  
};

exports.catchErrorServer = (action, message, error) => {
  console.error(error);
  const logObject = {
    action: action,
    message: message,
    errorMessage: error.message,
    errorStack: error.stack,
    errorType: error.name,
  };  
  logger.error(logObject);  
};