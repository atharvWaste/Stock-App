import ApiEndpoints from "../Utils/ApiEndpoints.Utils.js";
import UnivarsalAPICaller from "../Utils/UnivarsalAPICaller.Utils.js";
const dataFetcherFromApi = async (req, res) => {

  const { type, name } = req.query;

  try {
    if (!ApiEndpoints[type]) {
      return res.status(400).json({ error: "Invalid endpoint type" });
    }

    const url = ApiEndpoints[type](name);
    const {statusCode, data } = await UnivarsalAPICaller(url);

 if (statusCode === 200) {
      return res.json(data);
    } else {
      return res.status(statusCode).json({
        error: "API Error",
        statusCode,
      });
    }

  } catch (error) {
    console.error(
      "fuck, this mfsays: ",
      error.response ? error.response.data : error.message,
    );
    res
      .status(500)
      .json({
        "error for invalid query":
          "Check your terminal for the detailed error!",
      });
  }


};

export default dataFetcherFromApi;
