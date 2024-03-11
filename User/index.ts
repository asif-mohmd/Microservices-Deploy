import express,{Express, Request, Response} from 'express';
import cors from 'cors';
import {config} from 'dotenv'
import UserRouter from './routes/userRoutes'
import morgan from 'morgan';

import { connectDB } from './config/db';


config()
connectDB()
const app = express();




const port = process.env.PORT || 3001;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/users", UserRouter);
app.use("/test", (req, res) => {
    res.send("Hello Nabeel")
});



app.listen(3001, () => {
    console.log(`Server running on port ${port}`);
});

