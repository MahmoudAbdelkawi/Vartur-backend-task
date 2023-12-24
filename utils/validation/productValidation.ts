
import { check } from "express-validator";
const productValidation = [
    check('name').notEmpty().withMessage("name is required")
]

export {productValidation}
