import cloudinary from "../utils/cloudinary.js";
import path from "path";
import { v4 as uuid } from "uuid";
import { fileURLToPath } from "url";
import fs from "fs";
import Book from "../model/books/book.model.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const createBook = async (req, res) => {
  const { title, description, category, trending, oldPrice, newPrice } =
    req.body;

  try {
    if (
      !title ||
      !description ||
      !category ||
      !trending ||
      !oldPrice ||
      !newPrice
    ) {
      return res
        .status(422)
        .json({ success: false, message: "All fields are required" });
    }

    if (!req.files || !req.files.coverImage) {
      return res
        .status(422)
        .json({ success: false, message: "Select a cover image to upload" });
    }

    const { coverImage } = req.files;

    // Check file size
    if (coverImage.size > 1000000) {
      return res
        .status(422)
        .json({ success: false, message: "Image size must be less than 2MB." });
    }

    // Rename and save file locally
    const fileExtension = path.extname(coverImage.name);
    const fileName = `${path.basename(
      coverImage.name,
      fileExtension
    )}_${uuid()}${fileExtension}`;
    const uploadPath = path.join(__dirname, "..", "uploads", fileName);

    await new Promise((resolve, reject) => {
      coverImage.mv(uploadPath, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(uploadPath, {
      resource_type: "image",
    });

    if (!result.secure_url) {
      return res.status(422).json({
        success: false,
        message: "Failed to upload image to Cloudinary.",
      });
    }

    // Clean up local file
    fs.unlinkSync(uploadPath);

    // Save book to database
    const book = new Book({
      title,
      description,
      category,
      coverImage: result.secure_url,
      trending,
      oldPrice,
      newPrice,
    });

    await book.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book: { ...book._doc },
    });
  } catch (error) {
    console.error("Error creating book:", error.message);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};
