import { Router } from 'express';

const router = Router();

import toolsController from './app/controllers/toolsController';

router.get('/',toolsController.store);

export default router;