const express = require('express');
const http = require('http')
const docker = require('./docker');

const PORT = process.env.PORT || 3000;
const app = express();


app.post('/add', (req, res) => {
  console.log(req.query.image)
  res.writeHead(200);
  res.write(`Booting ${req.query.image}...\n`)
  const hostHash = docker.bootImage(req.query.image)
  res.write('Done.')
  res.write(`${hostHash}.localhost`)
  res.end();
})
app.use('/', (req, res) => {
  res.writeHead(200);
  res.write('<!doctype html>')
  res.write('<h1>Hello World From Master!</h1>')
  res.end();
})

http.createServer(app)
  .listen(PORT, () => {
    console.log(`Server is up and running at port: ${PORT}`)
    docker.startTraefik();
  })
