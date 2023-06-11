/*const { EMAIL_FROM, EMAIL_SUBJECT, FRONTEND_URL } = process.env;
module.exports = {
  from: EMAIL_FROM,
  subject: EMAIL_SUBJECT,
  frontendUrl: FRONTEND_URL,
  // html: `<p>Hola,</p>
  //       <p>Has sido invitado a unirte a nuestra aplicación a la empresa #NameCompany. Haz clic en el siguiente enlace para registrarte:</p>
  //       <p><a href="#HRef">#HRef</a></p>
  //       <p>Gracias,</p>
  //       <p>El equipo de nuestra aplicación</p>`
};
*/

module.exports = {
  from: "enzo.serena.lamadrid@gmail.com",
  subject: "Asunto del mail",
  html: `<p>Hola,</p>
        <p>Has sido invitado a unirte a nuestra aplicación a la empresa #NameCompany. Haz clic en el siguiente enlace para registrarte:</p>
        <p><a href="#HRef">#HRef</a></p>
        <p>Gracias,</p>
        <p>El equipo de nuestra aplicación</p>`  
};
