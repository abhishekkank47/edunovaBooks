import expess from 'express'
import { getBookByName, getBooks, getBooksByCategory, getBooksByCategoryAndCriteria, getBooksByRentRange } from '../Controllers/bookController.js';

export const bookRouter = expess.Router()

bookRouter.get('/getall', getBooks);
bookRouter.get('/get-by-name', getBookByName); 
bookRouter.get('/get-by-category', getBooksByCategory);
bookRouter.get('/get-by-rent', getBooksByRentRange); 
bookRouter.get('/filter', getBooksByCategoryAndCriteria);