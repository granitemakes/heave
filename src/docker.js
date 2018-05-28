const { exec, execSync } = require('child_process');

function hash(string){
  return string
    .split("")
    .reduce((a,b) => {
      a=((a<<5)-a)+b.charCodeAt(0);
      return a&a
    },0);              
}

exports.startTraefik = function startTraefik() {
  exec('traefik');
}

exports.bootImage = function bootImage(image) {
  const imageHash = hash(image);
  execSync(`docker run -d --label traefik.frontend.rule=Host:${imageHash}.localhost ${image}`, {
    stdio: 'inherit'
  })

  return imageHash;
}
