import Books from "../models/BookModel.js";
import ErrorHandler from "../utils/Errorhandler.js";

const addBooKController = async (req, res, next) => {
  try {
    const { book_name, isbn_no, no_of_pages, price } = req.body;

    if (!book_name || !isbn_no || !no_of_pages || !price) {
      return next(new ErrorHandler("Please provide mandatory fields..!", 400));
    }

    //search for duplicate isbn no book
    const duplicateBook = await Books.findOne({ isbn_no });

    if (duplicateBook) {
      return next(new ErrorHandler("A book with same ISBN no found..!", 400));
    }

    const newBook = await Books.create(req.body);

    res.json({ success: true, message: `${book_name} added successfully.` });
  } catch (error) {
    next(error);
  }
};

export default addBooKController;
