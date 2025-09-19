import Express, { Router, Request, Response } from 'express';
import { getOwner, getOwners } from '../controllers/clientsController.js';
import { getSpecies } from '../controllers/petsController.ts';
const router: Router = Express.Router();

// router.get('/', (req: Request, res: Response, next: NextFunction) => {
//   res.json('hi');
//   next();
// });
router.get('/owners', getOwners);
router.get('/owners/:id', getOwner);

router.get('/pets/species', getSpecies);

export default router;
