// controllers/productController.js
import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";

// Create product
export const createProductController = async (req, res) => {
  try {
    const {
      animalID,
      name,
      category,
      sex,
      dob,
      intakeDate,
      location,
    } = req.fields;

    const { photo } = req.files;

    // Validation
    if (!animalID || !name || !category || !intakeDate) {
      return res.status(400).send({ error: "All fields are required" });
    }

    if (photo && photo.size > 1000000) {
      return res.status(400).send({ error: "Photo should be less than 1MB" });
    }

    const product = new productModel({
      animalID,
      name,
      category,
      sex,
      dob,
      intakeDate,
      location,
      slug: slugify(name),
    });

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in creating product",
      error: error.message,
    });
  }
};

// Update product
export const updateProductController = async (req, res) => {
  try {
    const {
      animalID,
      name,
      category,
      sex,
      dob,
      intakeDate,
      location,
    } = req.fields;

    const { photo } = req.files;

    // Validation
    if (!animalID || !name || !category || !intakeDate) {
      return res.status(400).send({ error: "All fields are required" });
    }

    if (photo && photo.size > 1000000) {
      return res.status(400).send({ error: "Photo should be less than 1MB" });
    }

    const product = await productModel.findByIdAndUpdate(
      req.params.pid,
      {
        animalID,
        name,
        category,
        sex,
        dob,
        intakeDate,
        location,
        slug: slugify(name),
      },
      { new: true }
    );

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    res.status(200).send({
      success: true,
      message: "Product Updated Successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in updating product",
      error: error.message,
    });
  }
};

// Get all products
export const getProductController = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
};

// Get single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.slug);
    if (!product) {
      return res.status(404).send({ success: false, message: "Product not found" });
    }
    res.status(200).send({
      success: true,
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error fetching product",
      error: error.message,
    });
  }
};

// Delete product
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid);
    res.status(200).send({
      success: true,
      message: "Product Deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error deleting product",
      error: error.message,
    });
  }
};

// Get product photo
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid);
    if (product.photo.data) {
      res.set("Content-Type", product.photo.contentType);
      return res.send(product.photo.data);
    }
    res.status(404).send({ success: false, message: "Photo not found" });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error fetching product photo",
      error: error.message,
    });
  }
};
