// Example controller
import { Request, Response } from 'express';
import { exampleService } from '../services/exampleService';

export function exampleController(req: Request, res: Response) {
  const result = exampleService();
  res.json({ message: result });
}
