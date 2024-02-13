import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  isbn: { type: String, required: true },
});

export default mongoose.models.Book ||
  mongoose.model("Book", BookSchema, "books");
