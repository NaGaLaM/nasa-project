const http = require('http');
const app = require('./app');
const db = require('./models/knex.model'); 

const  {loadPlanetsData} = require('./models/planet.model');

const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL
const server =  http.createServer(app);

async function startServer() {
    try {
       await db.raw('select 1')
        console.log(`Connected to PostgreSQL`);
    } catch (error) {
        console.log(error,`Error in connecting PostgreSQL!!!`);
    }
    await loadPlanetsData()
}
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

startServer();