import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import upload from "express-fileupload";

import router from "./routes/router.js";
import orderRouter from "./model/orders/order.route.js";
import userRouter from "./model/users/user.route.js";

dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());
// Configure CORS
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

const port = process.env.PORT || 3000;

app.use("/api/books", router);
// app.use("/api/orders", router);
app.use("/api/orders", orderRouter);
app.use("/api/auth", userRouter);

app.get("/", (req, res) => {
  res.send(" Book Store Backend running ");
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
