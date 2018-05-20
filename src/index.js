const http = require('http')

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.write('<!doctype html>')
  res.write('<h1>Hello World From Master!</h1>')
  res.end();
})

server.listen(PORT, () => {
  console.log(`Server is up and running at port: ${PORT}`)
})
