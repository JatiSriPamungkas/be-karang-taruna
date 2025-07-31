import { Router } from "express";
import { addPosition } from "../controller/organization-structure.js";

export const router = Router();

router.get("/add-position", addPosition);
