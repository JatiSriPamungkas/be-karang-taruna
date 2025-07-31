import { Router } from "express";
import {
  addPosition,
  getPositionsByPeriod,
  setPositionMember,
} from "../controller/organization-structure.js";

export const router = Router();

router.post("/add-position", addPosition);
router.get("/period/:id_organization_period", getPositionsByPeriod);

router.patch("/set-position-member", setPositionMember);
