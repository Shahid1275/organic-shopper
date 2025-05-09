import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './config/db.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
const app = express();


const Port = 3000;
connectDB();
connectCloudinary();
//middlewares 
app.use(express.json());
app.use(cors())

//api user routes
app.use("/api/user", userRouter);

app.get("/", (req,res) =>{
    res.send("Backend is working Good!");
})

app.listen(Port, () =>{
    console.log("App is working Good!");
    
})