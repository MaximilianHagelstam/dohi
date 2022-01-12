import express from 'express';
import indexController from '../controllers/indexController';

const indexRoutes = express.Router();

indexRoutes.get('/ping', indexController.ping);

export default indexRoutes;
