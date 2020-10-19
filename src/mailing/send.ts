
import nodemailer from 'nodemailer'
import * as SMTPTransport from "nodemailer/lib/smtp-transport";
import envs from '../config'


const defaultMailingList: string = envs.MAILING_LIST
const senderEmail: string = envs.GMAIL_USERNAME
const senderPassword: string = envs.GMAIL_PASSWORD
const date: string = new Date().toDateString()

const htmlContent: string = `
<p>SPRAWDZ LISTE SPRZATANIA</p>
`

const nodemailerOptions: SMTPTransport.Options = {
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    user: senderEmail,
    pass: senderPassword
  },
  tls: {
    rejectUnauthorized: false
  }
}


const transporter = nodemailer.createTransport(nodemailerOptions)

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
  transporter.sendMail(mailOptions, (error: any, info: any) => error ? console.log(error) : console.log(`Email sent ${date} : ${info.response}`))

export default sendEmail
