import jwt from "jsonwebtoken";

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log("ReQ Headers", req.headers);
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Acess denied. No token " });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid credentials" });
    }
    req.user = user;
  });
  next();
};

export default verifyAdminToken;
