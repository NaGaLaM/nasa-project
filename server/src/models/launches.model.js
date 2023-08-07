const db = require('./knex.model');

async function getLaunches() {
    try {
        const result = await db.select('*').from('launches')
        return result
    } catch (error) {
        console.log(error,'Error in taking launches');
    }
}

async function addNewLaunches(launch) {
    try {
        await db('launches').insert({
            'launchDate':launch.launchDate,
            'mission':launch.mission,
            'rocket':launch.rocket,
            'target':launch.target
        })
        console.log('launches added succesfully');
    } catch (error) {
        console.log(error, `in adding launches Error!!`);
    }
}
async function deleteLaunches(launchId) {
    try {
       await db('launches')
        .where('flightNumber',launchId)
        .update({"success":false,"upcoming":false})
        console.log('deleted succesfully');
    } catch (error) {
        console.log(error,'deleting failed');
    }
}



module.exports = {
    getLaunches,
    addNewLaunches,
    deleteLaunches
}