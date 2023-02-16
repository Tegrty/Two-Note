// This file will serve as a table of contents for all the routes in the application

const express = require('express');

const notesRouter = require('./notes');

const app = express();
console.log('working');
app.use('/notes', notesRouter); 

module.exports = app; 
