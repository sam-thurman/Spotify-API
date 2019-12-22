'use strict';

const express = require('express');
const app = express();
const superagent = require('superagent');
const pg = require('pg');
require('ejs');
require('dotenv').config();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());

const client = new pg.Client(process.env.DATABASE_URL);
client.on('error', err => {
  console.error(err)
})

//routes
app.get('/', getHome);

function getHome(request, response) {
  response.render('pages/index');
};

client.connect(() => {
  app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
  });
});