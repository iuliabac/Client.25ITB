import { Request, Response } from 'express';

export function getSpecies(req: Request, res: Response) {
  console.log('Request query param', req.query.type);
  res.json(['dog', 'cat', 'hamster', 'parrot', 'spider', 'goldfish', 'Salmon', 'Trout', 'Tuna', 'Koi']);
};
