import { Router } from "express";

import toolsController from "./app/Controllers/toolsController";

const router = Router();

router.post("/tools", toolsController.store);
router.get("/tools", toolsController.get);
router.delete("/tools/:id", toolsController.delete);

export default router;
