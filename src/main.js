require('dotenv').config()
const { sendEmail } = require('./mailing/send')

sendEmail()
