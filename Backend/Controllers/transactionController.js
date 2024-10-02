import { bookModel } from "../Models/bookModel.js";
import { transactionModel } from "../Models/transactinModel.js";
import { userModel } from "../Models/userModel.js";

export const issueBook = async (req, res) => {
  try {
    const { bookName, userId } = req.body;

    // VALIDATION
    if (!bookName || !userId) {
      return res.status(400).send({
        success: false,
        message: "ALL FIELDS REQUIRED",
      });
    }

    // FIND BOOK BY NAME
    const book = await bookModel.findOne({ bookName });
    if (!book) {
      return res.status(400).send({
        success: false,
        message: "BOOK NOT FOUND",
      });
    }

    // EXISTENCE OF USER
    const userExist = await userModel.findById(userId);
    if (!userExist) {
      return res.status(400).send({
        success: false,
        message: "USER NOT FOUND",
      });
    }

    // CHECK IF BOOK IS ALREADY ISSUED
    const bookAlreadyIssued = await transactionModel.findOne({
      bookId: book._id,
      returnDate: { $exists: false },
    });
    if (bookAlreadyIssued) {
      return res.status(400).json({
        success: false,
        message: "BOOK IS ALREADY ISSUED TO SOMEONE ELSE",
      });
    }

    // CREATE A NEW TRANSACTION
    const newTransaction = new transactionModel({
      bookId: book._id,
      userId,
      issueDate: Date.now(),
    });
    await newTransaction.save();

    // POPULATE THE BOOK ID TO INCLUDE BOOK DETAILS
    const populatedTransaction = await transactionModel
      .findById(newTransaction._id)
      .populate("bookId", "bookName")
      .populate("userId", "name");

    res.status(201).json({
      success: true,
      message: "Book issued successfully",
      transaction: populatedTransaction,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const returnBook = async (req, res) => {
  try {
    const { bookName, userId } = req.body;

    //VALIDATION
    if (!bookName || !userId) {
      return res.status(400).send({
        success: false,
        message: "ALL FIELDS REQUIRED",
      });
    }

    //EXISTENCE OF BOOK
    const book = await bookModel.findOne({ bookName });
    if (!book) {
      return res.status(404).send({
        success: false,
        message: "BOOK NOT FOUND, PLEASE ENTER VALID BOOK NAME",
      });
    }

    //CHECK THE TRANSACTION EXISTENCE
    const transaction = await transactionModel.findOne({
      bookId: book._id,
      userId: userId,
      returnDate: { $exists: false },
    });
    if (!transaction) {
      return res.status(404).json({
        success: false,
        message: "TRANSACTION NOT FOUND OR BOOK RETURNED ALREADY",
      });
    }

    //CALCULATE TOTAL RENT AND GENERATE TRANSACTION RETURN STATUS
    const issueDate = new Date(transaction.issueDate);
    const returnDateParsed = new Date();

    //Math.abs make positive value if order of substraction changed
    const diffInMilisec = Math.abs(returnDateParsed - issueDate);
    const diffInDays = Math.ceil(diffInMilisec / (1000 * 60 * 60 * 24)); //Convert Milisec to days

    const totalRent = diffInDays * book.rentPerDay;

    //UPDATED TRANSACTION STATUS SAVED IN DB
    transaction.returnDate = returnDateParsed;
    transaction.totalRent = totalRent;
    transaction.status = true;
    await transaction.save();

    res.status(200).send({
      success: true,
      message: "BOOK RETURNED SUCCEFULLY",
      transaction,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const getTransactionDetailsByBook = async (req, res) => {
  try {
    const { bookName } = req.params;

    //GET BOOK BY NAME ID
    const book = await bookModel.findOne({ bookName });
    if (!book) {
      return res.status(404).send({
        success: false,
        message: "BOOK NOT FOUND",
      });
    }

    //ALL TRANSACTION RELATED BOOK
    const transactions = await transactionModel
      .find({ bookId: book._id })
      .populate("userId", "name")
      .populate("bookId", "bookName");

    if (!transactions || transactions.length === 0) {
      return res.status(404).send({
        success: false,
        message: "NO TRANSCTION HISTORY",
      });
    }

    res.status(200).send({
      success: true,
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTotalRentByBook = async (req, res) => {
  try {
    const { bookName } = req.params;

    //GET BOOK BY NAME ID
    const book = await bookModel.findOne({ bookName });
    if (!book) {
      return res.status(404).send({
        success: false,
        message: "BOOK NOT FOUND",
      });
    }

    //ALL TRANSACTION RELATED BOOK WITH STATUS RETURN TRUE
    const transactions = await transactionModel
      .find({ bookId: book._id, status: true })
      .populate("userId", "name")
      .populate("bookId", "bookName");

    //CALCULATION OF TOTAL RENT
    let totalRent = 0;
    for (let i = 0; i < transactions.length; i++) {
      totalRent += transactions[i].totalRent;
    }

    res.status(200).send({
      success: true,
      totalRent,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksIssuedToUser = async (req, res) => {
  try {
    const { userId } = req.params;

    //TRANSACTION HISTROY OF USER
    const transactions = await transactionModel
      .find({ userId })
      .populate("bookId", "bookName");

    if (!transactions || transactions.length === 0) {
      return res.status(404).send({
        success: false,
        message: "USER HAS NO HISTORY OF TRANSACTION YET",
      });
    }

    res.status(200).send({
      success: true,
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooksIssuedInDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    //SETTING INPUT TO THESE
    const start = new Date(startDate);
    const end = new Date(endDate);

    //SET DATE AT : YYYY-MM-DDT23:59:59.999
    end.setHours(23, 59, 59, 999);

    //START DATE <= TRANSACTION => END DATE
    const transactions = await transactionModel
      .find({
        issueDate: {
          $gte: start,
          $lte: end,
        },
      })
      .populate("userId", "name")
      .populate("bookId", "bookName");

    //EXISTENCE
    if (!transactions || transactions.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No books issued in this date range.",
      });
    }

    res.status(200).send({
      success: true,
      transactions,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//TASK
export const getBooksInDateRange = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    //VALIDATION
    if (!startDate || !endDate) {
      return res.status(400).send({
        success: false,
        message: "Start date and end date are required",
      });
    }

    //SETTING DATE
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Generate array of all dates between startDate and endDate
    const dateArray = [];
    let currentDate = new Date(start);

    while (currentDate <= end) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1); // move to next day
    }

    //AGGREGATE PIPELINE
    const transactions = await transactionModel.aggregate([
      {
        //Match transactions where issueDate or returnDate is within the date range
        $match: {
          $or: [
            { issueDate: { $gte: start, $lte: end } },
            { returnDate: { $gte: start, $lte: end } },
          ],
        },
      },
      {
        //Create a new field "day" by truncating issueDate/returnDate to just the day
        $addFields: {
          day: {
            $cond: {
              if: { $ne: ["$issueDate", null] },
              then: {
                $dateToString: { format: "%Y-%m-%d", date: "$issueDate" },
              },
              else: {
                $dateToString: { format: "%Y-%m-%d", date: "$returnDate" },
              },
            },
          },
        },
      },
      {
        //Group by the day
        $group: {
          _id: "$day",
          issuedBooks: {
            $push: {
              $cond: {
                if: { $ne: ["$issueDate", null] },
                then: {
                  bookId: "$bookId",
                  issueDate: "$issueDate",
                  userId: "$userId",
                },
                else: null,
              },
            },
          },
          returnedBooks: {
            $push: {
              $cond: {
                if: { $ne: ["$returnDate", null] },
                then: {
                  bookId: "$bookId",
                  returnDate: "$returnDate",
                  userId: "$userId",
                },
                else: null,
              },
            },
          },
        },
      },
      {
        //Remove null values from the issuedBooks and returnedBooks arrays
        $project: {
          issuedBooks: {
            $filter: {
              input: "$issuedBooks",
              as: "book",
              cond: { $ne: ["$$book", null] },
            },
          },
          returnedBooks: {
            $filter: {
              input: "$returnedBooks",
              as: "book",
              cond: { $ne: ["$$book", null] },
            },
          },
        },
      },
      {
        //Populate issuedBooks and returnedBooks with actual details from books and users
        $lookup: {
          from: "books",
          localField: "issuedBooks.bookId",
          foreignField: "_id",
          as: "issuedBookDetails",
        },
      },
      {
        $lookup: {
          from: "books",
          localField: "returnedBooks.bookId",
          foreignField: "_id",
          as: "returnedBookDetails",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "issuedBooks.userId",
          foreignField: "_id",
          as: "issuedUserDetails",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "returnedBooks.userId",
          foreignField: "_id",
          as: "returnedUserDetails",
        },
      },
    ]);

    //Create an output array that ensures every date has an entry, even if no books were issued or returned
    const result = dateArray.map((date) => {
      const dayStr = date.toISOString().split("T")[0]; // format the date as YYYY-MM-DD
      const matchingTransaction = transactions.find((t) => t._id === dayStr);

      return {
        date: dayStr,
        issuedBooks: matchingTransaction ? matchingTransaction.issuedBooks : [],
        returnedBooks: matchingTransaction
          ? matchingTransaction.returnedBooks
          : [],
      };
    });

    //Send the result as response
    res.status(200).json({
      success: true,
      message: "Books issued / returned within the date range",
      data: result,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
