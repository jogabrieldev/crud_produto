import { Router } from "express";
import {
  createProductController,
  updateProductController,
  deleteProductController,
  findProductByIdController,
  findProductaByNameController,
  findProductByCategoryController,
  findProductByImageController,
} from "../controller/productController";
import { validate} from "../middleware/validate"
import { productSchema } from "../validation/productValidation";

const router = Router();

// Criação de produto com validação
router.post("/products", validate(productSchema), createProductController);

router.get("/products/name", findProductaByNameController);
router.get("/products/category", findProductByCategoryController);
router.get("/products/image", findProductByImageController);


router.put("/products/:id", updateProductController);
router.delete("/products/:id", deleteProductController);
router.get("/products/:id", findProductByIdController);





export default router;
