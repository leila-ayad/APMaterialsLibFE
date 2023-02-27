const express = require('express');
const path = require('path');
const app = express();const axios = require('axios');
const url = require('url');
const fixieUrl = url.parse(process.env.FIXIE_URL);
const fixieAuth = fixieUrl.auth.split(':');

axios.get('https://www.abstractpicnicmaterials.com', {
  proxy: {
    protocol: 'http',
    host: fixieUrl.hostname,
    port: fixieUrl.port,
    auth: {username: fixieAuth[0], password: fixieAuth[1]}
  }
}).then(response => {
  console.log(response.status);
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 3000);
console.log(`server is listening`)