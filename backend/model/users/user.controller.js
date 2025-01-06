import User from "./user.model.js";
import jwt from "jsonwebtoken";
export const userAuth = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Admin: ", req.body);
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).json({ success: false, message: "Admin not found" });
    }
    console.log(admin);
    if (admin.password !== password) {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.EXPIRES_IN }
    );
    res.status(200).json({
      message: "Authentication successful",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.error("Failed to login as admin", error.message);
    res.status(401).json("Failed to login as admin");
  }
};
