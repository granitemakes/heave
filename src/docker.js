const { execSync } = require('child_process');

function main() {
  execSync('docker images', {
    stdio: 'inherit',
  })
}

module.exports = main;
