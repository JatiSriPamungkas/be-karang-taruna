import { Router } from "express";
import {
  getOrganizationPositions,
  insertOrganizationPosition,
} from "../controller/organization-positions.js";

export const router = Router();

router.get("/", getOrganizationPositions);

router.post("/", insertOrganizationPosition);
