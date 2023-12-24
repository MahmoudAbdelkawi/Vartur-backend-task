import { Router } from "express";
import { addCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controller/categoryController";
import { categoryValidation, updateCategoryValidation } from "../utils/validation/categoryValidation";
import validResult from "../middlewares/validationResult";
import { imageResizing } from "../middlewares/uploadImage";


var router = Router();

router.post('/', categoryValidation , validResult ,imageResizing , addCategory);
router.patch("/" , updateCategoryValidation , validResult , updateCategory)
router.delete('/:id'   , deleteCategory)
router.get('/getAllcategory', getAllCategories);
router.get('/:id/get-my-childs', getCategoryById);

export default router;