const DataFetcher2 =(app)=>{
     //mutual Fund
app.get("/", (req, res)=>{
   res.send("Mahadev Mahadev")
});

 //crypto
app.get("/crypto", (req, res)=>{
   res.send("Crypto OP")
});

}

export default DataFetcher2