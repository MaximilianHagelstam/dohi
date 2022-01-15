import { Request, Response } from 'express';
import logger from '../config/logger';
import Assignment from '../entities/Assignment';

const findAll = async (req: Request, res: Response) => {
  try {
    if (req.user) {
      console.log(req.user.id);
      const assignments = await Assignment.find({
        where: { creatorId: req.user.id },
      });
      res.json(assignments);
    } else {
      res.status(401).json({
        error: 'User not found',
      });
    }
  } catch (err) {
    logger.error(`Error finding assignments: ${err}`);
  }
};

const addAssignment = async (req: Request, res: Response) => {
  try {
    if (req.user) {
      const { title, description, className } = req.body;

      const assignment = await Assignment.create({
        title,
        description,
        className,
        creatorId: req.user.id,
      }).save();

      res.json(assignment);
    } else {
      res.status(401).json({
        error: 'User not found',
      });
    }
  } catch (err) {
    logger.error(`Error creating assignment: ${err}`);
  }
};

export default { findAll, addAssignment };
