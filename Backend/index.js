import dotenv from 'dotenv'
dotenv.config();
import express from 'express' 

import StanderdData from './src/Routes/StanderdData.Routes.js'
import SolutionOfCors from './src/Middlewar/cors.middleware.js'

const app = express();

const port = process.env.PORT;
SolutionOfCors(app)

StanderdData(app)

app.listen(port, ()=>{
    console.log(`Listening on the port 3000`);
})


// there is ging to be lage no of api calles in 1st page so 
// make some animation after the landing page which 