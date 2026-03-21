import cors from "cors";

const SolutionOfCors = (app) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
  ];

  const corsOptions = {
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },

    methods: ["GET", "POST", "PUT", "DELETE"],

    allowedHeaders: ["Content-Type", "Authorization"],

    credentials: true, 
  };

  app.use(cors(corsOptions));
};

export default SolutionOfCors;