import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

// Use existing model if it exists, or create a new one
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

export default Category;
