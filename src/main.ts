import http from 'http'
import {beginTasks} from "./tasks"

const endRequest = (req, res) => res.end()
const port = process.env.PORT || 5000
const server = http.createServer(endRequest)

server.listen(port,() => {
  console.log(`Server Listening on port: ${port}`
      beginTasks()
} ))
