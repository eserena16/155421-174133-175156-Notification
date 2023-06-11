const Message = require('../models/message');
var { logger } = require("../utils/logger.js");

function consumeMessage(msg) {
  try {       
    logger.info({
      action: "consumeMessage",        
      message: msg.content.toString()      
    });
  } catch (error) {
    catchErrorServer(
      "consumer Rabbit",
      "Error starting message consumer.",
      error,
    );
  }    
}

module.exports = { consumeMessage };