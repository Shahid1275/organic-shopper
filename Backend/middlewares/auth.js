import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ success: false, message: "No authorization token provided" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No authorization token provided" });
  }

  try {
    const token_decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!token_decoded.userId && !token_decoded.id) {
      throw new Error("Invalid token payload: userId or id not found");
    }
    req.body.userId = token_decoded.userId || token_decoded.id; // Support both userId and id
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    res
      .status(401)
      .json({
        success: false,
        message: "Invalid authentication token. Please log in again.",
      });
  }
};
