// Example middleware
import { Request, Response, NextFunction } from 'express';

export function exampleMiddleware(req: Request, res: Response, next: NextFunction) {
  // Example logic
  next();
}
