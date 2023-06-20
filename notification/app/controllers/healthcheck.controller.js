var { logger } = require("../utils/logger");
const config = require("../config/rabbit.config");
const amqp = require('amqplib');

exports.get = async (req, res) => {  
  let errorMessage = "";
  try{
	  const connection = await amqp.connect(config.HOST);
    const channel = await connection.createChannel();
    await channel.close();
    await connection.close();
  } catch (error) {        
    logger.error(
      "connection queue",
      "An error occurred during connection queue.",
      error      
    );
    errorMessage = "Error connecting to queue. ";
  }

  if (errorMessage !== "") {
    res.status(503).send(
      {
        message: errorMessage,
      }
    );
  } else {
    res.status(200).send(
      {
        message: `Connection queue successful.`,
      }
    );
  }
};
