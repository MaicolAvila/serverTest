import { Router } from "express";
const router = Router();

import * as paradaControlller from "../controllers/routecontrol.controller";

router.get("/", paradaControlller.getParada);

router.post("/", paradaControlller.createParada);

router.post("/many", paradaControlller.createManyStops);

export default router;
