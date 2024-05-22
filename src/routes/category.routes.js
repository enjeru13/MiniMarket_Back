import { Router } from "express";
import {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
import { createCategorySchema } from '../schemas/category.schema.js'
import { validateSchema } from "../middlewares/validator.middleware.js";



const router = Router();

router.get("/categories", authRequired, getCategories);

router.get("/categories/:id", authRequired, getCategory);

router.post("/categories", authRequired, validateSchema(createCategorySchema) , createCategory);

router.put("/categories/:id", authRequired, updateCategory);

router.delete("/categories/:id", authRequired, deleteCategory);

export default router;
