import express from 'express'
import dotenv from 'dotenv'
import {errors, request} from 'undici'
import cors from 'cors';


dotenv.config()

const key = process.env.AIP_KEY
const port = process.env.PORT

const app = express();
app.use(express.json());


app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; connect-src 'self' https://stock.indianapi.in"
    );
    next();
});

// -------------------------------------------stock page routes------------------------------------------------------------

app.get('/test', async (req, res) => {
  const Nameofthestock = req.query.body


  try {
    const {statusCode, body} = await request(`https://stock.indianapi.in/stock?name=Tata+Steel`, {
      headers:{'x-api-key':key}
    })

    const data = await body.json();

    if (statusCode === 200) {
      res.json(data);
    }else{
      res.status(statusCode).json({error:'the data is note found'})
    }

  } catch (error) {
     console.error("DEBUG INFO:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Check your terminal for the detailed error!' });  }

  })


app.get('/Genral', async (req, res) => {
  const Nameofthestock = req.query.body;
const FormatedNAme = encodeURIComponent(Nameofthestock)

if (!Nameofthestock) {
    return res.status(400).json({ error: 'Please provide a stock name in the query: ?body=Name' });
  }

  try {
    const {statusCode, body} = await request(`https://stock.indianapi.in/stock?name=${FormatedNAme}`, {
      headers:{'x-api-key':key}
    })

    const data = await body.json();

    if (statusCode === 200) {
      res.json(data);
    }else{
      res.status(statusCode).json({error:'the data is note found'})
    }

  } catch (error) {
     console.error("DEBUG INFO:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Check your terminal for the detailed error!' });  }

  })

app.get('/Most_ActiveBse_Stock', async (req,res) =>{

  try {
    const {statusCode, body} = await request(`https://stock.indianapi.in/BSE_most_active`, {
        headers:{'x-api-key': key}
    })
        
   const data = await body.json();

    if (statusCode === 200) {
      res.json(data);
      

    } else {
      res.status(statusCode).json({ error: 'API Error', details: data });
    }
    
  } catch (error) {
   console.error("DEBUG INFO:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Check your terminal for the detailed error!' });  }
});

app.get('/Most_ActiveNse_Stock', async (req,res) =>{

  try {
    const {statusCode, body} = await request(`https://stock.indianapi.in/NSE_most_active`, {
        headers:{'x-api-key': key}
    })
        
   const data = await body.json();

    if (statusCode === 200) {
      res.json(data);
      

    } else {
      res.status(statusCode).json({ error: 'API Error', details: data });
    }
    
  } catch (error) {
   console.error("DEBUG INFO:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Check your terminal for the detailed error!' });  }
});

app.get('/trending_stock', async (req, res)=>{

try {
  const {statusCode, body} = await request('https://stock.indianapi.in/trending', {
     headers: {
    'x-api-key': key
  }
  })
 
  const data = await body.json();
  
  if (statusCode === 200) {
    res.json(data);
  }else {
      res.status(statusCode).json({ error: 'API Error', details: data });
    }
    
  } catch (error) {
   console.error("DEBUG INFO:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Check your terminal for the detailed error!' });  }
});


app.get('/Price_Shockers_Data', async (req,res)=>{
try{
  const {statusCode, body}= await request('https://stock.indianapi.in/price_shockers',{
headers:{'x-api-key': key}
  })

  const Pricedata = body.json();

  if (statusCode === 200) {
    res.json(Pricedata);
  } else {
    res.status(statusCode).json({ error: 'API Error', details: data });
  }
}catch{
console.error("DEBUG INFO:", error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Check your terminal for the detailed error!' });  }

})

// -------------------------------------------stock page routes------------------------------------------------------------



app.listen(port, ()=>{
    console.log( `Working on ${port}`);
    
})