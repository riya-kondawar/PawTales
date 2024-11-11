import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    animalID: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.ObjectId,
      ref: "Category", // Assuming you have a Category model
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'], // Limiting to specific values
    },
    dob: {
      type: Date,
    },
    intakeDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
