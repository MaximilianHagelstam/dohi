import { Request, Response } from 'express';

const ping = (_req: Request, res: Response) => {
  res.json({ message: 'Server running' });
};

export default { ping };
