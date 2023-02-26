import Books from "../models/BookModel.js";
import ErrorHandler from "../utils/Errorhandler.js";

const subscribeBookController = async (req, res, next) => {
  try {
    const bookId = req.params.id;

    const UpdateBook = await Books.findByIdAndUpdate(
      { _id: bookId },
      { subscribed: true }
    );

    if (!UpdateBook) {
      return next(new ErrorHandler("Unable to update book"));
    }

    res.json({ success: true, message: "subscribed" });
  } catch (error) {
    next(error);
  }
};

export default subscribeBookController;
