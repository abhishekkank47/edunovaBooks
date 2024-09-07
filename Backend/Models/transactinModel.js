import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
    },
    totalRent: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const transactionModel = mongoose.model("transactions", transactionSchema);
