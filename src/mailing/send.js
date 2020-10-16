const nodemailer = require('nodemailer')
const defaultMailingList = process.env.MAILING_LIST
const senderEmail = process.env.GMAIL_USERNAME
const senderPassword = process.env.GMAIL_PASSWORD

const date = new Date().toDateString()

const htmlContent = `
<p>SPRAWDZ LISTE SPRZATANIA</p>
`

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
  subject: `Obowiązki domowe (${date})`,
  html: htmlContent,
  attachments: [
    {
      path: 'src/resources/images/task_table.jpg'
    }
  ]
}

const sendEmail = (options = mailOptions) =>
  transporter.sendMail(mailOptions, (error, info) => error ? console.log(error) : console.log(`Email sent ${date} : ${info.response}`))

module.exports = {
  sendEmail
}
