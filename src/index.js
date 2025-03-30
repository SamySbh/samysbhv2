import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

import serviceRouter from './routes/service.routes.js';
import userRouter from './routes/user.routes.js';
import orderRouter from './routes/order.routes.js';
import orderItemRouter from './routes/order-item.routes.js';
import authRouter from './routes/auth.routes.js'
import {paymentRouter, webhookRouter} from './routes/payment.routes.js';
import uploadRouter from './routes/upload.routes.js';

import cors from 'cors'


const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files from the 'public' directory.
app.use(express.static('public'));

app.use('/payments', webhookRouter);

// Middleware to parse JSON request bodies.
app.use(express.json());

app.use(cors())


app.use('/services', serviceRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/order-items', orderItemRouter);
app.use('/auth', authRouter)
app.use('/payments', paymentRouter);
app.use('/upload', uploadRouter);

app.listen(port, () => {
    console.log(`My API app listening on port ${port}`)
});