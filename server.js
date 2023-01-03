import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db.js";
import express from "express";

const app = express();

//middleware:
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page...");
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => console.log("Server running on " + port));
  } catch (error) {console.log(error);}
};
start();
