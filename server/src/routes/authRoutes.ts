import express from 'express';
import passport from 'passport';
import { CLIENT_URL } from '../config/constants';
import logger from '../config/logger';

const authRoutes = express.Router();

authRoutes.get(
  '/google',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  passport.authenticate('google', { scope: ['profile'] })
);

authRoutes.get(
  '/google/callback',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  passport.authenticate('google', { failureRedirect: '/', session: true }),
  (_req, res) => {
    res.redirect(CLIENT_URL);
  }
);

authRoutes.get('/logout', (req, res) => {
  req.logout();
  logger.info('User logged out');
  res.redirect(CLIENT_URL);
});

export default authRoutes;
