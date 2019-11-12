import { Router } from 'express';

import toolsController from './app/Controllers/toolsController';
import usersController from './app/Controllers/userController';

const router = Router();

router.post('/users', usersController.store);
router.post('/tools', toolsController.store);
router.get('/tools', toolsController.get);
router.delete('/tools/:id', toolsController.delete);

export default router;
