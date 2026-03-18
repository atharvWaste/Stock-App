import dataFetcherFromApi from '../Controlers/traveller.Controlers.js'
import CompleteInfoFetcher from '../Controlers/CompleteInfoFetcher.Controlers.js'
const DataFetcher=(app)=>{
app.get("/StaterMatter", dataFetcherFromApi);//all basic data stater data
app.get("/CompleteInfoFetcher", CompleteInfoFetcher);
}

export default DataFetcher;