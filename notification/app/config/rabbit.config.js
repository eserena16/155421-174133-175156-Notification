const { RABBIT_HOST, RABBIT_QUEUE } = process.env;

module.exports = {
  HOST: RABBIT_HOST,
  QUEUE: RABBIT_QUEUE 
};