
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';
// configure .env file
dotenv.config({path: './.env'});

const app = express();

connectDB();






