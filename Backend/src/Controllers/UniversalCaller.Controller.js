
import Url from "../Utils/Url.Utils.js";
import DataFormater from "../Controllers/DataFormater.Controller.js";
import fetchWithRetry from "../Controllers/fetchWithRetry.controller.js";

const urls = Url();

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const UniversalCaller = async (req, res) => {
  const { market = "BSE" } = req.query;

  console.log("Market from frontend:", market);

  try {
    const delay = (ms) => new Promise((r) => setTimeout(r, ms));

    const batches = chunkArray(urls, 2);
    let Result = [];

    for (let i = 0; i < batches.length; i++) {
      const batch = batches[i];

      const responses = await Promise.all(
        batch.map((url) => fetchWithRetry(url))
      );

      for (const res of responses) {
        if (!res) continue;
        if (res.statusCode !== 200) continue;

        const data = await res.body.json();
        console.log(data);
        
        Result.push(data);
      }

      await delay(500); 
    }

    DataFormater(Result, res, market);
console.log(Result);

  } catch (error) {
    console.error("UniversalCaller Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export default UniversalCaller;