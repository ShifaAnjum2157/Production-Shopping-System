import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/autoRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module



import cors from 'cors'
dotenv.config()
connectDB();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', productRoutes)
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.get('/', (req, res) => {
    res.send("<h1>E-commerce<h1/>")
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.bgYellow.white);
})