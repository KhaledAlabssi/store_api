import dotenv from "dotenv";
dotenv.config();
import 'express-async-errors'
import connectDB from "./db.js";
import express from "express";

const app = express();

//middleware, controllers, routers:
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import productsRouter from './routers/productsRouter.js'

app.use(express.json());

app.get("/", (req, res) => {
  res.send("home page...");
});

app.use('/api/v1/products', productsRouter)

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
