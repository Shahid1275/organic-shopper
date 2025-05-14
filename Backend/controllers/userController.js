import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
// Validation constants
const MIN_PASSWORD_LENGTH = 8;
const TOKEN_EXPIRATION = "1d";

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Validate input fields
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: "All fields (name, email, password) are required",
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Please provide a valid email address",
      });
    }

    // Validate password strength
    if (password.length < MIN_PASSWORD_LENGTH) {
      return res.status(400).json({
        success: false,
        error: `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`,
      });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: "Email already registered. Please use a different email.",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION,
    });

    // Return success response (excluding sensitive data)
    const userResponse = {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
    };

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: userResponse,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred during registration",
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: "Both email and password are required",
      });
    }

    // Find user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        error: "User does not exist",
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: TOKEN_EXPIRATION,
    });

    // Return success response (excluding sensitive data)
    const userResponse = {
      id: user._id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    };

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userResponse,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred during login",
    });
  }
};


const adminLogin = async(req,res) =>{
    try{
       // First check if req.body exists
       if (!req.body) {
         return res.status(400).json({
           success: false,
           message: "Request body is missing",
         });
       }
       
       const {email,password} = req.body;
       console.log('Request Body:', req.body);
       
       if (!email || !password) {
         return res.status(400).json({
           success: false,
           message: "Email and password are required",
         });
       }
       
       if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
         const token = jwt.sign({email,password}, process.env.JWT_SECRET, {expiresIn:TOKEN_EXPIRATION});
         return res.status(200).json({success:true, message:"Admin login successful",token});
       }
       else{
         return res.status(401).json({success:false, message:"Invalid credentials"});
       }
    }catch(error){
       console.error("Admin login error:", error);
       return res.status(500).json({success:false, error:"An unexpected error occurred during admin login"});
    }
}
export { registerUser, loginUser,adminLogin };