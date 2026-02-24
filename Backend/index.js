import express from 'express'

const app = express();

app.get('/', (req,res) =>{
    res.send("Namo parvati pataye har har mahadev");
})

app.listen(3000, ()=>{
    console.log("Working");
    
})