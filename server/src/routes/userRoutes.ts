import express from 'express';
import userController from '../controllers/userController';
import isAuth from '../middleware/isAuth';

const userRoutes = express.Router();

userRoutes.get('/', isAuth, userController.getCurrentUser);

export default userRoutes;
