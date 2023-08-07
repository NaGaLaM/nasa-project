const fs = require('fs');
const path = require('path');
const {parse} = require('csv-parse');
const db = require('./knex.model');



function isHabitablePlanets(planet) {
    return planet['koi_disposition'] === 'CONFIRMED' && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6 
} 

async function loadPlanetsData() {
    return new Promise((resolve,reject) =>{
        fs.createReadStream(path.join(__dirname,'..','..','data','kepler.data.csv'))
        .pipe(parse({
           comment:'#',
           columns:true
        }))
        .on('data', async (data) => {
            if(isHabitablePlanets(data)){
                await savePlanets(data)
            }
        })
        .on('error',(err)=>{
            console.log(err);
            reject(err)
        })
        .on('end', async ()=>{
            const countPlanetsFound = (await getAllPlanets()).length
            console.log(`${countPlanetsFound} habitable planets found! ` );
            resolve()
        });
    })
}
async function getAllPlanets() {
    result = await db.select('*').from('planets')
    return result
}
async function savePlanets(planet){
    try{
            return
            await db('planets').insert({keplerName:planet.kepler_name})
    }catch(err){
        console.log(err,`error in adding planets`);
    }
}

module.exports={
    loadPlanetsData,

    getAllPlanets
}