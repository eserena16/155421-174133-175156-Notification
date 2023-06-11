require("dotenv").config();

const newRelic = require("newrelic");

const connectRabbit = require('./app/connections/rabbitmq');
const messageConsumer = require('./app/consumers/message.consumer');

async function run() {
  try {
    const channel = await connectRabbit.connect();
    if(channel){
      await messageConsumer.startConsumer(channel);      
    }
    console.log('Start message queue:');
  } catch (error) {
    console.error('Error running the application:', error);
  }
}

run();