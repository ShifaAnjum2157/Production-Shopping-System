import express from 'express'
import { requireSignin, isAdmin } from '../middleware/authMiddleware.js'
import { createCategoryController, updateCategoryController, categoryControlller, singleCategoryController, deleteCategoryCOntroller } from '../controllers/categoryController.js'

const router = express.Router()
router.post('/create-category', requireSignin, isAdmin, createCategoryController)
router.put('/update-category/:id', requireSignin, isAdmin, updateCategoryController)
router.get("/get-category", categoryControlller);
router.get("/single-category/:slug", singleCategoryController);
router.delete("/delete-category/:id", requireSignin, isAdmin, deleteCategoryCOntroller);
export default router