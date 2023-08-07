const express = require('express');

const {httpgetAllPlanets} = require('./planets/planets.controler');

const planetRouter = express.Router();

planetRouter.get('/planets',httpgetAllPlanets);

module.exports = {
    planetRouter
};