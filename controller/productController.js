// // controllers/productController.js
// import productModel from "../models/productModel.js";
// import fs from "fs";
// import slugify from "slugify";

// // Create product
// export const createProductController = async (req, res) => {
//   try {
//     const { animalID, name, description, gender, category, location } =
//       req.fields;
//     const { photo } = req.files;

//     // Validation
//     if (
//       !animalID ||
//       !name ||
//       !description ||
//       !gender ||
//       !category ||
//       !location
//     ) {
//       return res.status(400).send({ error: "All fields are required" });
//     }

//     if (photo && photo.size > 1000000) {
//       return res.status(400).send({ error: "Photo should be less than 1MB" });
//     }

//     const product = new productModel({
//       animalID,
//       name,
//       description,
//       gender,
//       category,
//       location,
//       slug: slugify(name),
//     });

//     if (photo) {
//       product.photo.data = fs.readFileSync(photo.path);
//       product.photo.contentType = photo.type;
//     }

//     await product.save();
//     res.status(201).send({
//       success: true,
//       message: "Product Created Successfully",
//       product,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in creating product",
//       error: error.message,
//     });
//   }
// };

// // Get all products
// export const getProductController = async (req, res) => {
//   try {
//     const products = await productModel
//       .find()
//       .populate("category")
//       .select("-photo");
//     res.status(200).send({
//       success: true,
//       countTotal: products.length,
//       message: "All Products",
//       products,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in getting products",
//       error: error.message,
//     });
//   }
// };

// // Get single product
// export const getSingleProductController = async (req, res) => {
//   try {
//     const product = await productModel.findById(req.params.pid);
//     if (!product) {
//       return res
//         .status(404)
//         .send({ success: false, message: "Product not found" });
//     }
//     res.status(200).send({
//       success: true,
//       product,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error fetching product",
//       error: error.message,
//     });
//   }
// };

// // Update product
// export const updateProductController = async (req, res) => {
//   try {
//     const { animalID, name, description, gender, category, location } =
//       req.fields;
//     const { photo } = req.files;

//     // Validation
//     if (
//       !animalID ||
//       !name ||
//       !description ||
//       !gender ||
//       !category ||
//       !location
//     ) {
//       return res.status(400).send({ error: "All fields are required" });
//     }

//     if (photo && photo.size > 1000000) {
//       return res.status(400).send({ error: "Photo should be less than 1MB" });
//     }

//     const product = await productModel.findByIdAndUpdate(
//       req.params.pid,
//       {
//         animalID,
//         name,
//         description,
//         gender,
//         category,
//         location,
//         slug: slugify(name),
//       },
//       { new: true }
//     );

//     if (photo) {
//       product.photo.data = fs.readFileSync(photo.path);
//       product.photo.contentType = photo.type;
//     }

//     await product.save();
//     res.status(200).send({
//       success: true,
//       message: "Product Updated Successfully",
//       product,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in updating product",
//       error: error.message,
//     });
//   }
// };

// // Delete product
// export const deleteProductController = async (req, res) => {
//   try {
//     await productModel.findByIdAndDelete(req.params.pid);
//     res.status(200).send({
//       success: true,
//       message: "Product Deleted Successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error deleting product",
//       error: error.message,
//     });
//   }
// };

// // Get product photo
// export const productPhotoController = async (req, res) => {
//   try {
//     const product = await productModel.findById(req.params.pid);
//     if (product.photo.data) {
//       res.set("Content-Type", product.photo.contentType);
//       return res.send(product.photo.data);
//     }
//     res.status(404).send({ success: false, message: "Photo not found" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error fetching product photo",
//       error: error.message,
//     });
//   }
// };











import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";

// Create Product Controller
export const createProductController = async (req, res) => {
  try {
    const { name, description, gender, category, location, dob, intakeDate } = req.fields;
    const { photo } = req.files;

    // Validation
    switch (true) {
      case !name:
        return res.status(400).send({ error: "Name is required" });
      case !description:
        return res.status(400).send({ error: "Description is required" });
      case !gender:
        return res.status(400).send({ error: "Gender is required" });
      case !category:
        return res.status(400).send({ error: "Category is required" });
      case !location:
        return res.status(400).send({ error: "Location is required" });
      case !intakeDate:
        return res.status(400).send({ error: "Intake Date is required" });
      case photo && photo.size > 1000000:
        return res.status(400).send({ error: "Photo is required and should be less than 1MB" });
    }

    const product = new productModel({
      ...req.fields,
      slug: slugify(name),
    });

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    res.status(201).send({
      success: true,
      message: "Product created successfully",
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

// Get All Products Controller
export const getProductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12)
      .sort({ createdAt: -1 });

    res.status(200).send({
      success: true,
      countTotal: products.length,
      message: "All Products fetched successfully",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in getting products",
      error: error.message,
    });
  }
};

// Get Single Product Controller
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category");

    res.status(200).send({
      success: true,
      message: "Single Product fetched successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while getting single product",
      error: error.message,
    });
  }
};

// Get Product Photo Controller
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("Content-Type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while getting photo",
      error: error.message,
    });
  }
};

// Delete Product Controller
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid);
    res.status(200).send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error: error.message,
    });
  }
};

// Update Product Controller
export const updateProductController = async (req, res) => {
  try {
    const { name, description, gender, category, location, dob, intakeDate } = req.fields;
    const { photo } = req.files;

    // Validation
    switch (true) {
      case !name:
        return res.status(400).send({ error: "Name is required" });
      case !description:
        return res.status(400).send({ error: "Description is required" });
      case !gender:
        return res.status(400).send({ error: "Gender is required" });
      case !category:
        return res.status(400).send({ error: "Category is required" });
      case !location:
        return res.status(400).send({ error: "Location is required" });
      case !intakeDate:
        return res.status(400).send({ error: "Intake Date is required" });
      case photo && photo.size > 1000000:
        return res.status(400).send({ error: "Photo should be less than 1MB" });
    }

    const product = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }

    await product.save();
    res.status(200).send({
      success: true,
      message: "Product updated successfully",
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
