import express from "express";
import addBooKController from "../controllers/addBooKController.js";
import subscribeBookController from "../controllers/subscribeBookController.js";
import getBooksController from "../controllers/getBooksController.js";

const router = express.Router();

//route1: Add Book

router.post("/add/book", addBooKController);

//route2: Subscribe book

router.put("/subscribe/book/:id", subscribeBookController);

//route3: get all books  
router.get("/get/books", getBooksController);

export default router;
