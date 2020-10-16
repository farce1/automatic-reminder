require('dotenv').config()
const cron = require('node-cron')
const { sendEmail } = require('./mailing/send')

const task = cron.schedule('00 30 11 * * *', () => {
  sendEmail()
}, {
  timezone: 'Europe/Warsaw'
})

task.start()