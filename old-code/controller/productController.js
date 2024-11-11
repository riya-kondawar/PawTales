// import productModel from "../models/productModel.js";
// import fs from "fs";
// import slugify from "slugify";

// // Create Product Controller
// export const createProductController = async (req, res) => {
//   try {
//     const { name, description, gender, category, location, dob, intakeDate } = req.fields;
//     const { photo } = req.files;

//     // Validation
//     switch (true) {
//       case !name:
//         return res.status(400).send({ error: "Name is required" });
//       case !description:
//         return res.status(400).send({ error: "Description is required" });
//       case !gender:
//         return res.status(400).send({ error: "Gender is required" });
//       case !category:
//         return res.status(400).send({ error: "Category is required" });
//       case !location:
//         return res.status(400).send({ error: "Location is required" });
//       case !intakeDate:
//         return res.status(400).send({ error: "Intake Date is required" });
//       case photo && photo.size > 1000000:
//         return res.status(400).send({ error: "Photo is required and should be less than 1MB" });
//     }

//     const product = new productModel({
//       ...req.fields,
//       slug: slugify(name),
//     });

//     if (photo) {
//       product.photo.data = fs.readFileSync(photo.path);
//       product.photo.contentType = photo.type;
//     }

//     await product.save();
//     res.status(201).send({
//       success: true,
//       message: "Product created successfully",
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

// // Get All Products Controller
// export const getProductController = async (req, res) => {
//   try {
//     const products = await productModel
//       .find({})
//       .populate("category")
//       .select("-photo")
//       .limit(12)
//       .sort({ createdAt: -1 });

//     res.status(200).send({
//       success: true,
//       countTotal: products.length,
//       message: "All Products fetched successfully",
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

// // Get Single Product Controller
// export const getSingleProductController = async (req, res) => {
//   try {
//     const product = await productModel
//       .findOne({ slug: req.params.slug })
//       .select("-photo")
//       .populate("category");

//     res.status(200).send({
//       success: true,
//       message: "Single Product fetched successfully",
//       product,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error while getting single product",
//       error: error.message,
//     });
//   }
// };

// // Get Product Photo Controller
// export const productPhotoController = async (req, res) => {
//   try {
//     const product = await productModel.findById(req.params.pid).select("photo");
//     if (product.photo.data) {
//       res.set("Content-Type", product.photo.contentType);
//       return res.status(200).send(product.photo.data);
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error while getting photo",
//       error: error.message,
//     });
//   }
// };

// // Delete Product Controller
// export const deleteProductController = async (req, res) => {
//   try {
//     await productModel.findByIdAndDelete(req.params.pid);
//     res.status(200).send({
//       success: true,
//       message: "Product deleted successfully",
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send({
//       success: false,
//       message: "Error while deleting product",
//       error: error.message,
//     });
//   }
// };

// // Update Product Controller
// export const updateProductController = async (req, res) => {
//   try {
//     const { name, description, gender, category, location, dob, intakeDate } = req.fields;
//     const { photo } = req.files;

//     // Validation
//     switch (true) {
//       case !name:
//         return res.status(400).send({ error: "Name is required" });
//       case !description:
//         return res.status(400).send({ error: "Description is required" });
//       case !gender:
//         return res.status(400).send({ error: "Gender is required" });
//       case !category:
//         return res.status(400).send({ error: "Category is required" });
//       case !location:
//         return res.status(400).send({ error: "Location is required" });
//       case !intakeDate:
//         return res.status(400).send({ error: "Intake Date is required" });
//       case photo && photo.size > 1000000:
//         return res.status(400).send({ error: "Photo should be less than 1MB" });
//     }

//     const product = await productModel.findByIdAndUpdate(
//       req.params.pid,
//       { ...req.fields, slug: slugify(name) },
//       { new: true }
//     );

//     if (photo) {
//       product.photo.data = fs.readFileSync(photo.path);
//       product.photo.contentType = photo.type;
//     }

//     await product.save();
//     res.status(200).send({
//       success: true,
//       message: "Product updated successfully",
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









import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js";
import fs from "fs";
import slugify from "slugify";

// Create Pet (Product)
export const createProductController = async (req, res) => {
  try {
    const { animalID, name, description, category, location, gender, dob, intakeDate } = req.fields;
    const { photo } = req.files;

    // Validation
    switch (true) {
      case !animalID:
        return res.status(400).send({ error: "Animal ID is required" });
      case !name:
        return res.status(400).send({ error: "Name is required" });
      case !description:
        return res.status(400).send({ error: "Description is required" });
      case !category:
        return res.status(400).send({ error: "Category is required" });
      case !location:
        return res.status(400).send({ error: "Location is required" });
      case !intakeDate:
        return res.status(400).send({ error: "Intake date is required" });
      case photo && photo.size > 1000000:
        return res.status(400).send({ error: "Photo should be less than 1MB" });
    }

    const pet = new productModel({ ...req.fields, slug: slugify(name) });
    if (photo) {
      pet.photo.data = fs.readFileSync(photo.path);
      pet.photo.contentType = photo.type;
    }
    await pet.save();

    res.status(201).send({
      success: true,
      message: "Pet added successfully",
      pet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while adding pet",
      error: error.message,
    });
  }
};

// Get All Pets
export const getProductController = async (req, res) => {
  try {
    const pets = await productModel.find({}).populate("category").select("-photo").sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      countTotal: pets.length,
      message: "All Pets retrieved successfully",
      pets,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in getting pets",
      error: error.message,
    });
  }
};

// Get Single Pet by Slug
export const getSingleProductController = async (req, res) => {
  try {
    const pet = await productModel.findOne({ slug: req.params.slug }).select("-photo").populate("category");
    res.status(200).send({
      success: true,
      message: "Pet fetched successfully",
      pet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while getting pet",
      error: error.message,
    });
  }
};

// Get Pet Photo
export const productPhotoController = async (req, res) => {
  try {
    const pet = await productModel.findById(req.params.pid).select("photo");
    if (pet.photo.data) {
      res.set("Content-type", pet.photo.contentType);
      return res.status(200).send(pet.photo.data);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while getting pet photo",
      error: error.message,
    });
  }
};

// Update Pet
export const updateProductController = async (req, res) => {
  try {
    const { animalID, name, description, category, location, gender, dob, intakeDate } = req.fields;
    const { photo } = req.files;

    const updatedPet = await productModel.findByIdAndUpdate(
      req.params.pid,
      { ...req.fields, slug: slugify(name) },
      { new: true }
    );

    if (photo) {
      updatedPet.photo.data = fs.readFileSync(photo.path);
      updatedPet.photo.contentType = photo.type;
    }

    await updatedPet.save();
    res.status(200).send({
      success: true,
      message: "Pet updated successfully",
      updatedPet,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while updating pet",
      error: error.message,
    });
  }
};

// Delete Pet
export const deleteProductController = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Pet deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting pet",
      error: error.message,
    });
  }
};
