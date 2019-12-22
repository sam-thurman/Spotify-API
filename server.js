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
