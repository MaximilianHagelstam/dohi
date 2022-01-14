import express from 'express';
import passport from 'passport';
import logger from '../config/logger';

const authRoutes = express.Router();

authRoutes.get(
  '/google',
  passport.authenticate('google', { scope: ['profile'] })
);

authRoutes.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/', session: true }),
  (_req, res) => {
    res.redirect(process.env.CLIENT_URL);
  }
);

authRoutes.get('/logout', (req, res) => {
  req.logout();
  logger.info('User logged out');
  res.redirect(process.env.CLIENT_URL);
});

export default authRoutes;
