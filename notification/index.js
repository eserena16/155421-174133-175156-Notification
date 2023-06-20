require("dotenv").config();

const { logger } = require("./app/utils/logger");

const newRelic = require("newrelic");

const connectRabbit = require('./app/connections/rabbitmq');
const messageConsumer = require('./app/consumers/message.consumer');

const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "localhost",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Notification app." });
});

// routes
app.use((req, res, next) => {
  next();
});

require("./app/routes/healthcheck.routes")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8060;
app.listen(PORT, () => {  
  logger.info({
    action: "serverStart",
    message: `Server is running on port ${PORT}.`,
    tags: ["server", "startup"],
  });
});

run();

async function run() {
  try {
    const channel = await connectRabbit.connect();
    if(channel){
      await messageConsumer.startConsumer(channel);
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
