import express from 'express';
import assignmentController from '../controllers/assignmentController';
import isAuth from '../middleware/isAuth';

const assignmentRoutes = express.Router();

assignmentRoutes.get('/', isAuth, assignmentController.findAll);
assignmentRoutes.post('/', isAuth, assignmentController.create);
assignmentRoutes.delete('/:id', isAuth, assignmentController.deleteById);
assignmentRoutes.get('/:id', isAuth, assignmentController.findById);

export default assignmentRoutes;
