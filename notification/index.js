require("dotenv").config();

const { logger } = require("./app/utils/logger");

const newRelic = require("newrelic");

const connectRabbit = require('./app/connections/rabbitmq');
const messageConsumer = require('./app/consumers/message.consumer');

async function run() {
  try {
    const channel = await connectRabbit.connect();
    if(channel){
      await messageConsumer.startConsumer(channel);      
      logger.info({
        action: "serverStart",
        message: `Server is running.`,
        tags: ["server", "startup"],
      });
    }    
  } catch (error) {
    console.log("error" + error);
    logger.error({
      action: "serverStart",
      message: `Error start server`,
      error: error
    });
  }
}

run();