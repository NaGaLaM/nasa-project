const {addNewLaunches,deleteLaunches,getLaunches } = require('../../models/launches.model');

async function getAllLaunches(req,res) {
    const result = await getLaunches()
    return res.status(200).json(result);
}

async function httpAddNewLaunches(req,res) {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);
    const result = await addNewLaunches(launch);
    return res.status(201).json(result)
}

async function httpAbortLaunch(req,res) { 
    const launchID = +req.params.id;
    const aborted = await deleteLaunches(launchID)
    return res.status(204).json(aborted)
}
module.exports = {
    getAllLaunches,
    httpAddNewLaunches,
    httpAbortLaunch,
}