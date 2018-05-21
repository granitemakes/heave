const fs = require('node-fs-extra');
const { NginxConfFile: nginx } = require('nginx-conf');

// nginx -s reload
const filePath = '/etc/nginx/conf.d/locations/dynamic.conf'
// const filePath = __dirname + '/tmp/locations/dynamic.conf'
fs.outputFileSync(filePath, '');

nginx.create(filePath, (err, conf) => {
  if (err) {
    console.log(err);
    return;
  }

  // conf.nginx._add('server');
  // conf.nginx.server._add('listen', '80');
  // conf.nginx.server._add('location', '/yo');
  // conf.nginx.server.location._add('proxy_pass', 'http://test-web-app:8000/');
  conf.nginx._add('location', '/yo');
  conf.nginx.location._add('proxy_pass', 'http://test-web-app:8000/');
  console.log('CONFIG UPDATED!');
})
