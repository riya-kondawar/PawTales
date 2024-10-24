import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryController, // Fixed spelling
  createCategoryController,
  deleteCategoryController, // Fixed spelling
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

// Routes
// Create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// Update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// Get all categories
router.get("/get-category", categoryController); // Fixed spelling

// Single category
router.get("/single-category/:slug", singleCategoryController);

// Delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController // Fixed spelling
);

export default router;
