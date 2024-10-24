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
      required: true, // Updated from animalName to name
    },
    category: {
      type: String,
      required: true, // Updated from animalType to category
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    sex: {
      type: String,
      enum: ['Male', 'Female', 'Unknown'], // Optional: Limit to specific values
    },
    dob: {
      type: Date,
    },
    intakeDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String, // New field for location
    },
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);

