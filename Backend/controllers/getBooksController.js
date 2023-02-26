import Books from "../models/BookModel.js";
import ErrorHandler from "../utils/Errorhandler.js";

const getBooksController = async (req, res, next) => {
  try {
    const AllBooks = await Books.find();

    res.json({ success: true, Books: AllBooks });
  } catch (error) {
    next(error);
  }
};

export default getBooksController;
