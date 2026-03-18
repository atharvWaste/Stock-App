import { request } from "undici";
import dotenv from "dotenv";

dotenv.config();

const UnivarsalAPICaller = async (url) => {
  const ApiKey = process.env.API_KEY;

    const { statusCode, body } = await request(url, {
      headers: {
        "x-api-key": ApiKey,
      },
    });

    return { statusCode, body};
 
};

export default UnivarsalAPICaller;
