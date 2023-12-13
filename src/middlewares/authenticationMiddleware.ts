import { Request, Response, NextFunction } from 'express';

const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user) res.status(401).json({ message: 'not authenticated' });
  else next();
};

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user) res.status(401).json({ message: 'not authenticated' });
  else if (!req.session.user.admin) res.status(401).json({ message: 'not admin' });
  else next();
};

export { isAuthenticated, isAdmin };
