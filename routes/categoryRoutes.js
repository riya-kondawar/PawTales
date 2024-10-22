import express from 'express';
import { requireSignIn, isAdmin } from '../middlewares/authMiddleware.js';
import {categoryController,                         createCategoryController, 
    deleteCategoryController, 
    SingleCategoryController, updateCategoryController 
} from '../controller/categoryController.js';

const router = express.Router();

// POST request to create a category
router.post('/create-category', requireSignIn, isAdmin, createCategoryController);

//update category
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController )

//getAll category
router.get('/get-category', categoryController)

//single category
router.get('/single-category/:slug', SingleCategoryController)

//delete category
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)

export default router;
