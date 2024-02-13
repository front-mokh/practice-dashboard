import mongoose from "mongoose";

const BookDetailsSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  title: { type: String, required: true },
  isbn: { type: String, required: true },
  pageCount: { type: Number, required: false },
  thumbnailUrl: { type: String, required: false },
  longDescription: { type: String, required: true },
});

export default mongoose.models.BookDetails ||
  mongoose.model("BookDetails", BookDetailsSchema, "books");
