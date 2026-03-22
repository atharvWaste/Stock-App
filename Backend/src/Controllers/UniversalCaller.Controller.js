import dotenv from "dotenv";
dotenv.config();
import { request } from "undici";

const ApiKey = process.env.API_KEY;

import Url from "../Utils/Url.Utils.js";
import DataFormater from "../Controllers/DataFormater.Controller.js"

const urls = Url();
const UniversalCaller = async (req, res) => {
  try {
    const Responses = await Promise.all(
      urls.map((url) =>
        request(url, {
          headers: { "x-api-key": ApiKey },
        }),
      ),
    );
    const Result =await Promise.all(
      Responses.map((Response,index)=>{
const {statusCode , body} = Response;

if (statusCode !=200) {
  console.error(`api lodding error ${index}, ${statusCode}`);
}
const Resbody =body.json();
return Resbody;

      })
    )
    
DataFormater(Result);

  } catch (error) {
    console.error(error);
  }
};

export default UniversalCaller;
