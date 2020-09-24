const args = process.argv.slice(2);
const url = args[0];
const path = args[1];
const fs = require('fs');
const bytes = fs.statSync(path);

const request = require('request');
request( url, (error, response, body) => {
  if (error) {
    console.log('Failed to make request');
    process.exit;
  }
  fs.writeFile(path, body, (error) => {
    if (error) {
      console.log('Failed to make request');
      return;
    }
    const stats= fs.statSync(path);
    const filSizeInBytes = stats['size'];
    console.log(`Downnloaded and saved ${filSizeInBytes} bytes to ${path}`);
  });
});
