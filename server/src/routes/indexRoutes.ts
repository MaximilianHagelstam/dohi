import express from 'express';
import indexController from '../controllers/indexController';

const indexRoutes = express.Router();

indexRoutes.get('/', indexController.healthCheck);

export default indexRoutes;
