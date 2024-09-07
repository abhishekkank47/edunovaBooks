import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const bookModel = mongoose.model("books", booksSchema);
