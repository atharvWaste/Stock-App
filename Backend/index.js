import express from 'express'
import dotenv from 'dotenv'
import {request} from 'undici'

dotenv.config()

const key = process.env.AIP_KEY
const port = process.env.PORT

const app = express();

app.get('/Stock', async (req,res) =>{
  const Requested_symbol = "Tata Steel";

  try {
    const {statusCode, body} = await request(`https://stock.indianapi.in/stock?name=${encodeURIComponent(Requested_symbol)}`, {
        headers:{'x-api-key': key}
    });
        
   const data = await body.json();

    if (statusCode === 200) {
      res.json(data);
    } else {
      res.status(statusCode).json({ error: 'API Error', details: data });
    }
    
  } catch (error) {
   console.error("DEBUG INFO:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Check your terminal for the detailed error!' });  }
})

app.listen(port, ()=>{
    console.log( `Working on ${port}`);
    
})