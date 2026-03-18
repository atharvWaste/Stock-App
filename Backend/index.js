import dotenv from 'dotenv'
dotenv.config();
import express from 'express' 

import DataFetcher from './src/Routes/DataFetcherstock.Route.js'
import SolutionOfCors from './src/Middlewar/cors.middleware.js'


const app = express();

const port = process.env.PORT;
SolutionOfCors(app)

DataFetcher(app)

app.listen(port, ()=>{
    console.log(`Listening on the port 3000`);
})


// there is ging to be lage no of api calles in 1st page so 
// make some animation after the landing page which 