import User from "./user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const userAuth = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login request:", req.body);

    const admin = await User.findOne({ email });

    if (!admin) {
      return res
        .status(404)
        .json({ success: false, message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: admin._id, email: admin.email, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRES_IN || "1d" },
    );

    return res.status(200).json({
      success: true,
      message: "Authentication successful",
      token,
      user: {
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to login as admin",
    });
  }
};