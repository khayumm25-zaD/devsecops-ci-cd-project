const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD DevSecOps Pipeline Running');
});

const PORT = 3000;

let server;

if (require.main === module) {
  server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;