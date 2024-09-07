import expess from 'express'
import { getUsers } from '../Controllers/userController.js';

export const userRouter = expess.Router()

//FOR GETTING ALL USER
userRouter.get('/getall', getUsers);