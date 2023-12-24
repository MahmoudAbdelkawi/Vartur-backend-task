import { NextFunction, Request, Response } from "express";
import expressAsyncHandler from "express-async-handler";
import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { getCategoriesWithChildren } from "../helpers/recursiveJoin";

const prisma = new PrismaClient()
const Categories = prisma.category


const addCategory  = expressAsyncHandler(async (req:Request,res : Response,next : NextFunction) => {
    const {name, parent_id} = req.body
    const category = await Categories.create({
        data:{
            name,
            parent_id:Number(parent_id),
            picture:req.fileName
        }
    })
    res.status(StatusCodes.CREATED).json({
        message:"category added successfully",
        data:{category}
    })
})


const deleteCategory = expressAsyncHandler(async (req:Request,res : Response,next : NextFunction) => {
    const {id} = req.params
    const category = await Categories.update({
        where:{
            id:Number(id)
        },
        data:{
            published:false
        }
    })
    res.status(StatusCodes.NO_CONTENT).json({
        message:"Category Deleted successfully"
    })
})


const updateCategory = expressAsyncHandler(async (req:Request,res : Response,next : NextFunction) => {
    
    const {id , name} = req.body
    const newProduct = await Categories.update({
        where:{
            id:Number(id)
        },
        data:{
            name,
            updatedAt:new Date()
        }
    })
    res.status(StatusCodes.OK).json(
        {
            message:"category updated successfully",
            data:{newProduct}
        }
    )
})




const getAllCategories  = expressAsyncHandler(async (req:Request,res : Response,next : NextFunction) => {

    const categories = await getCategoriesWithChildren(null);
    
    res.status(StatusCodes.OK).json({
        message:"categories fetched successfully",
        data:{categories}
    })
})

const getCategoryById = expressAsyncHandler(async (req:Request,res : Response,next : NextFunction) => {
    const {id} = req.params

    const category = await getCategoriesWithChildren(Number(id));
    res.status(StatusCodes.CREATED).json({
        message:"category fetched successfully",
        data:{category}
    })
})

export { getCategoryById , addCategory , getAllCategories  , updateCategory , deleteCategory }