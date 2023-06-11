const { RABBIT_HOST, RABBIT_QUEUE } = process.env;

module.exports = {
  //HOST: RABBIT_HOST,
  //QUEUE: RABBIT_QUEUE

  HOST: "amqp://localhost",
  QUEUE: "queueMail"
};