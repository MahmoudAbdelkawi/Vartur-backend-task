import { PrismaClient } from "@prisma/client";
import { check } from "express-validator";
import ApiError from "../ApiError";

const prisma = new PrismaClient()
const Categories = prisma.category


const categoryValidation = [
    check('name').notEmpty().withMessage("name is required"),
]



const updateCategoryValidation = [
    ...categoryValidation,
]


export {categoryValidation  , updateCategoryValidation}
