import express from 'express';
import assignmentController from '../controllers/assignmentController';
import isAuth from '../middleware/isAuth';

const assignmentRoutes = express.Router();

assignmentRoutes.get('/', isAuth, assignmentController.findAll);
assignmentRoutes.post('/', isAuth, assignmentController.addAssignment);

export default assignmentRoutes;
