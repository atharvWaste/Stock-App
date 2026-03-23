import dotenv from "dotenv";
dotenv.config();

import { request } from "undici";


const ApiKey = process.env.API_KEY;
const fetchWithRetry =(url)=>{
return request(url, {headers: { "x-api-key": ApiKey }});
}

export default fetchWithRetry;