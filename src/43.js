// Node.js module for basic operations
const { exec } = require('child_process');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    exec(`https://api.example.com/${url}`, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(JSON.parse(stdout));
      }
    });
  });
}

function main() {
  fetchJson('http://example.com/json')
    .then(jsonData => console.log(jsonData))
    .catch(err => console.error(`Error: ${err}`));
}
