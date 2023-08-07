const express = require('express');
const {getAllLaunches, httpAddNewLaunches,httpAbortLaunch} = require('./launches/launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/launches', getAllLaunches);
launchesRouter.post('/launches', httpAddNewLaunches);
launchesRouter.delete(`/launches/:id`, httpAbortLaunch);




module.exports = launchesRouter
