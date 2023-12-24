
import express, { NextFunction, Request, Response } from 'express';
import  ApiError  from './utils/ApiError';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import productRouter from './routes/product';
import categoryRouter from './routes/category';
import { json } from 'body-parser';
import fileUpload from 'express-fileupload';

dotenv.config()

var app = express();

declare global {
    namespace Express {
      interface Request {
        fileName: string;
      }
    }
  }


app.use(express.json());
app.use(json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'images')));
app.use(cors())
app.use('/api/v1/products', productRouter);
app.use('/api/v1/category', categoryRouter);

// catch 404 and forward to error handler
app.use("*",function(req:Request, res:Response, next:NextFunction) {
  return next(new ApiError("Page not found" , 404));
});

// error handler
app.use(function(err:ApiError, req:Request, res:Response, next:NextFunction) {
    res.status(err.statusCode || 500).send({
        message: err.message || "Something went wrong",
        stack : err.stack
    });
});

app.listen(4000,()=>{
    console.log("server is running......")
})

process.on("unhandledRejection",(err:ApiError)=>{
  console.log(err.name);
  console.log(err.message);
})


module.exports = app;