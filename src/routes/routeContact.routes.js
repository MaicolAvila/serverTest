import { Router } from "express";
const router = Router();

import * as contactControlller from "../controllers/contact.control";

router.post("/new", contactControlller.createContact);

export default router;
