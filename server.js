
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import cors from 'cors';

// To convert back to 'js' format from 'jsx', just uncomment below 2 lines and remove 'type' attribute from 'package.json' 
// const express = require('express')
// const colors = require('colors')

// configure env
// dotenv.config({path:''});
dotenv.config();

// database config
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req,res) => {
    res.send("<h1>Welcome to PawTales</h1>");
});

// PORT 
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);

});