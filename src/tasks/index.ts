import cron from "node-cron";
import sendEmail from "../mailing/send";

const scheduleExpression: string = '00 30 11 * * *'
const cronOptions: cron.ScheduleOptions = {
    timezone: 'Europe/Warsaw'
}
const cronTaskToSchedule = () => {
    sendEmail()
    console.log('Email Sent!')
}

const task = cron.schedule(scheduleExpression, cronTaskToSchedule, cronOptions)

export const beginTasks = () => {
    console.log('Tasks Started!')
    task.start()
}