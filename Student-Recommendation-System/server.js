/* eslint-disable no-console */
// Start point of the server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
// Routes
const loginRouter = require('./Routes/login.route');
const registerRouter = require('./Routes/register.route');
// Server
const app = express();
const distPath = path.join(__dirname, '/Views');
mongoose.connect('mongodb://localhost/app', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connetion to DB up!');
  app.use(cors());
  app.use(express.static(distPath));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/login', loginRouter);
  app.use('/register', registerRouter);

  // app.get("/", (req, res) => {
  //   res.sendFile(distPath + "index.html");
  // });

  app.listen(3000, () => {
    console.log('listening on 3000');
  });
});
