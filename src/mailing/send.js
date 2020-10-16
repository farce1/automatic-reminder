const nodemailer = require('nodemailer')
const defaultMailingList = process.env.MAILING_LIST
const senderEmail = process.env.GMAIL_USERNAME
const senderPassword = process.env.GMAIL_PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: 'false',
  port: 25,
  auth: {
    user: senderEmail,
    pass: senderPassword
  },
  tls: {
    rejectUnauthorized: false
  }
})

const mailOptions = {
  from: senderEmail,
  to: defaultMailingList,
  subject: 'Automatyczne Obowiązki Domowe',
  text: 'DZISIAJ SPRZATAMY DOM'
}

const sendEmail = (options = mailOptions) =>
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
    } else {
      console.log('Email sent: ' + info.response)
    }
  })

module.exports = {
  sendEmail
}
