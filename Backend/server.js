import express from 'express';
import 'dotenv/config';
import connectDB from './config/db.js';
const app = express();


const Port = 3000;
connectDB();

app.get("/", (req,res) =>{
    res.send("Backend is working");
})

app.listen(Port, () =>{
    console.log("App is working Good!");
    
})