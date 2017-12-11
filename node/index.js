const {createServer} = require('http')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

// Configure our HTTP server to respond with Hello World to all requests.
const server = createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('Hi Node!\n')
})

server.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
