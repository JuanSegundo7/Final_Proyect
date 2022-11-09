const server = require('./src/app.js');
const axios = require("axios");
require('dotenv').config();
const { PORT } = process.env;

  server.listen(PORT, () => {
    console.log(`Listening at Port: ${PORT}`); // eslint-disable-line no-console
  });

  