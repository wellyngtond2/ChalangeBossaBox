import { Router } from "express";

import toolsController from "./app/Controllers/toolsController";

/**
 * @swagger
 * /Tools:
 *   post:
 *     tags:
 *       - tools
 *     name: Tools
 *     summary: Storage new tool
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           $ref: '#/Schemas/toolsSchemas'
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             link:
 *               type: string
 *             description:
 *               type: string
 *             tags:
 *               type: string array
 *         required:
 *           - title
 *           - link
 *           - description
 *     responses:
 *       201:
 *         description: Tools created successfully
 *       400:
 *         description: Bad storege, tools no created
 */

const router = Router();

router.post("/tools", toolsController.store);
router.get("/tools", toolsController.get);
router.delete("/tools/:id", toolsController.delete);

export default router;
