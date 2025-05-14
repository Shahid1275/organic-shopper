import express from 'express';
import { auth } from '../middlewares/auth.js';
import { addReview, deleteReview, editReview } from '../controllers/reviewController.js';

const reviewRouter = express.Router();

reviewRouter.post('/add', auth, addReview);
reviewRouter.post('/edit', auth, editReview);
reviewRouter.post('/delete', auth, deleteReview);

export default reviewRouter;