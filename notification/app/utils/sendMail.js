const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

exports.sendMail = (req, res) => {
  const msg = {
    to: req.to,
    from: req.from,
    subject: req.subject,
    html: req.html,
  };
  sgMail
    .send(msg)
    .then(() => res.status(200).send({ message: "Email Sent" }))
    .catch((error) => {
      res.status(error.code).send({ message: error });
    });
};
