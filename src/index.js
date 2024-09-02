
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/index.js';
// configure .env file
dotenv.config({ path: './.env' });

const app = express();

connectDB().then(() => {
    app.on('error', (err) => {
        console.error('Express Error:', err);
    });
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
}).catch((error) => { console.log("This is DB Connection error", error); process.exit(1); });






