import { bookModel } from "../Models/bookModel.js";

//FOR GETTING ALL BOOKS
export const getBooks = async (req, res) => {
  try {
    const getall = await bookModel.find()
    res.status(200).send(
      {
        success:true,
        message:"ALL BOOKS GET SUCCESFULLY",
        getall,
      }
    )
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//GET BOOK BY A NAME
export const getBookByName = async (req, res) => {
  try {
    const { name } = req.query;
    const books = await bookModel.find({ bookName: new RegExp(name, 'i') });
    res.status(200).send(
      {
        success:true,
        message:"A BOOK GOT SUCCESFULLY",
        books,
      }
    )
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


  //GETTING BOOKS BY CATEGORY
  export const getBooksByCategory = async (req, res) => {
    try {
      const { category } = req.query;
      const books = await bookModel.find({ category: new RegExp(category, 'i') });
      res.status(200).send(
        {
          success:true,
          message:"A BOOK BY CATEGORY GOT SUCCESFULLY",
          books,
        }
      )
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  //GET BOOK BY RENT-RANGE
  export const getBooksByRentRange = async (req, res) => {
    try {
      const { minRent, maxRent } = req.query;
      const books = await bookModel.find({
      rentPerDay: { $gte: minRent, $lte: maxRent }
    })
    res.status(200).send(
      {
        success:true,
        message:"ALL BOOKS WITHIN RANGE GOT SUCCESFULLY",
        books,
      }
    )
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

  //GETTING BOOKS BY CATEGORY || NAME || RENT COMBINATION
  export const getBooksByCategoryAndCriteria = async (req, res) => {
    try {

      const { category, name, minRent, maxRent } = req.query;

      let query = {};
  
      if (category) query.category = new RegExp(category, 'i');
      if (name) query.bookName = new RegExp(name, 'i');
      if (minRent || maxRent) {
        query.rentPerDay = {};
        if (minRent) query.rentPerDay.$gte = minRent;
        if (maxRent) query.rentPerDay.$lte = maxRent;
      }
  
      const books = await bookModel.find(query);
      res.status(200).send(
        {
          success:true,
          message:"BOOK GOT BY FILTER",
          books
        }
      )
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  