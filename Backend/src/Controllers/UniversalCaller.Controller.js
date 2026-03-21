import dotenv from "dotenv";
dotenv.config();
import { request } from "undici";

const ApiKey = process.env.API_KEY;

import Url from "../Utils/Url.Utils.js";
import DataFormater from "../Controllers/DataFormater.Controller.js"

const urls = Url();
const UniversalCaller = async (req, res) => {
  // Api calling at end point
  try {
    const Response = await Promise.all(
      urls.map((url) =>
        request(url, {
          headers: { "x-api-key": ApiKey },
        }),
      ),
    );

    const StatusCode = Response.status;
    const data = Response.body.json();

    if (StatusCode === 200) {
      DataFormater(data);
    }
  } catch (error) {
    console.error(error);
  }
};

export default UniversalCaller;
