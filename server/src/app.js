const express = require('express');
const cors = require('cors');
const {planetRouter} = require('./routes/planet.router') ;
const launchesRouter = require('./routes/launches.router') ;


const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}))
app.use(express.json()); 
app.use(planetRouter); 
app.use(launchesRouter); 

module.exports = app;
