import { Request, Response } from 'express';

const healthCheck = (_req: Request, res: Response) => {
  res.json({ message: 'Server running' });
};

export default { healthCheck };
