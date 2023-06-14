const Message = require('../models/message');
var { logger } = require("../utils/logger.js");
const sendMail = require("../utils/sendMail");
var { catchErrorServer } = require("../utils/loggerFunctions.js");

function consumeMessage(msg) {
  try {
    sendMail.sendMail(JSON.parse(msg.content.toString()));
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