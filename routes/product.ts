import { Router } from "express";
import { addProduct, deleteProduct, getAllProduct, searchOnProduct, updateProduct } from "../controller/productController";
import validResult from "../middlewares/validationResult";
import { productValidation } from "../utils/validation/productValidation";
import { imageResizing } from "../middlewares/uploadImage";

var router = Router();

router.post('/addProduct',productValidation , validResult , imageResizing , addProduct);
router.delete('/deleteProduct/:productId' , deleteProduct);
router.get('/searchOnProduct/' , searchOnProduct);
router.get('/getAllProduct/' , getAllProduct);
router.patch('/updateProduct/:productId', productValidation , validResult , updateProduct);

export default router;
