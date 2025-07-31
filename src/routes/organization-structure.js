import { Router } from "express";
import {
  addPosition,
  getPositionsByPeriod,
} from "../controller/organization-structure.js";

export const router = Router();

router.get("/add-position", addPosition);
router.get("/period/:id_organization_period", getPositionsByPeriod);
