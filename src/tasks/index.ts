import cron from 'node-cron'
import sendEmail from '../mailing/send'

const scheduleExpression = '00 30 11 * * *'
const cronOptions: cron.ScheduleOptions = {
    timezone: 'Europe/Warsaw'
}
const cronTaskToSchedule = (): void => {
    sendEmail()
    console.log('Email Sent!')
}

export const task: cron.ScheduledTask = cron.schedule(scheduleExpression, cronTaskToSchedule, cronOptions)
