import { Request, Response } from 'express';
import logger from '../config/logger';
import Assignment from '../entities/Assignment';

const findAll = async (req: Request, res: Response) => {
  try {
    const assignments = await Assignment.find({
      where: { creatorId: req.user.id },
    });

    res.json(assignments);
  } catch (err) {
    logger.error(`Error finding assignments: ${err}`);
  }
};

const create = async (req: Request, res: Response) => {
  try {
    const { title, description, className } = req.body;

    const assignment = await Assignment.create({
      title,
      description,
      className,
      creatorId: req.user.id,
    }).save();

    res.json(assignment);
  } catch (err) {
    logger.error(`Error creating assignment: ${err}`);
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const assignment = await Assignment.delete({
      id,
      creatorId: req.user.id,
    });

    res.status(204).json(assignment);
  } catch (err) {
    logger.error(`Error deleting assignment: ${err}`);
  }
};

const findById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const assignment = await Assignment.findOne({
      where: { id, creatorId: req.user.id },
    });

    res.json(assignment);
  } catch (err) {
    logger.error(`Error finding assignment: ${err}`);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, description, className } = req.body;

    const assignment = await Assignment.findOne({
      where: { id, creatorId: req.user.id },
    });

    if (assignment) {
      const result = await Assignment.merge(assignment, {
        title,
        description,
        className,
      }).save();

      res.status(204).json(result);
    } else {
      res.status(400).json({ message: `Assignment with id ${id} not found` });
    }
  } catch (err) {
    logger.error(`Error updating assignment: ${err}`);
  }
};

export default { findAll, create, deleteById, findById, update };
