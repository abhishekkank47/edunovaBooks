import expess from 'express'
import { getBooksInDateRange, getBooksIssuedInDateRange, getBooksIssuedToUser, getTotalRentByBook, getTransactionDetailsByBook, issueBook, returnBook } from '../Controllers/transactionController.js';

export const transactionRouter = expess.Router()

transactionRouter.post('/issue', issueBook);
transactionRouter.post('/return', returnBook); 
transactionRouter.get('/book/:bookName', getTransactionDetailsByBook);
transactionRouter.get('/book/rent/:bookName', getTotalRentByBook); 
transactionRouter.get('/user/:userId', getBooksIssuedToUser); 
transactionRouter.get('/date-range', getBooksIssuedInDateRange);

transactionRouter.post('/each-day-within-range', getBooksInDateRange);
