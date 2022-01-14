import { NextFunction, Request, Response } from 'express';

const isAuth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: 'User has not been authenticated',
    });
  } else {
    next();
  }
};

export default isAuth;
