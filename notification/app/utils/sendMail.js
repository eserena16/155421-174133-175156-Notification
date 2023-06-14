const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;
const { catchErrorServer } = require("./loggerFunctions.js");

sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendMail = (message) => {
  sgMail
    .send(message)
    .then()
    .catch((error) => {
      return catchErrorServer(
        "sendMail",
        "An error occurred sending mail.",
        error        
      );
    });
};
