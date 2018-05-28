const { execSync } = require('child_process');

exports.main = function main() {
  execSync('docker images', {
    stdio: 'inherit',
  })
}

exports.bootImage = function bootImage(image) {
  execSync(`docker run -d ${image}`, {
    stdio: 'inherit'
  })
}
