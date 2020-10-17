
import cron from 'node-cron'
import sendEmail from './mailing/send'

const task = cron.schedule('00 30 11 * * *', () => {
  sendEmail()
}, {
  timezone: 'Europe/Warsaw'
})

console.log('App is running...')
task.start()
