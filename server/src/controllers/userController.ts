import { Request, Response } from 'express';
import logger from '../config/logger';
import User from '../entities/User';

const getCurrentUser = async (req: Request, res: Response) => {
  try {
    if (req.user) {
      const user = await User.findOne({ googleId: req.user.googleId });
      res.json(user);
    } else {
      res.status(401).json({
        error: 'User not found',
      });
    }
  } catch (err) {
    logger.error(`Error getting current user: ${err}`);
  }
};

export default { getCurrentUser };
