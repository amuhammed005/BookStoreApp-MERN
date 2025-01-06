import express from "express";
import {
  createBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} from "../model/books/book.controller.js";
import verifyAdminToken from "../model/middleware/verifyAdminToken.js";
// import { createOrder } from "../model/orders/order.controller.js";

const router = express.Router();

// Book Routes
router.post("/create-book", verifyAdminToken, createBook);
router.get("/", getAllBooks);
router.get("/:id", getSingleBook);
router.put("/edit/:id", verifyAdminToken, updateBook);
router.delete("/:id", verifyAdminToken, deleteBook);

// Order Routes
// router.post("/", createOrder);

export default router;
