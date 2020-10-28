import http from 'http'
import { beginTasks } from './tasks'

const endRequest = (req: http.IncomingMessage, res: http.ServerResponse): void => res.end()
const port: string | number = process.env.PORT || 5000
const server: http.Server = http.createServer(endRequest)

server.listen(port, () => {
    console.log(`Server Listening on port: ${port}`)
    beginTasks()
})
