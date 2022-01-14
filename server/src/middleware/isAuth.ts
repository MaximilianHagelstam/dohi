import { NextFunction, Request, Response } from 'express';

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.status(401).json({
      error: 'Unauthenticated request',
    });
  } else {
    next();
  }
};

export default isAuth;
