import express from "express";
import { createOrder, getUserOrders } from "./order.controller.js";

const orderRouter = express.Router();

orderRouter.post("/", createOrder);

orderRouter.get("/email/:email", getUserOrders);

export default orderRouter;
