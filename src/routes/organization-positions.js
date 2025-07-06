import { Router } from "express";
import {
  getOrganizationPositions,
  insertOrganizationPosition,
  dropOrganizationPosition,
  getOrganizationPositionDataById,
} from "../controller/organization-positions.js";

export const router = Router();

router.get("/", getOrganizationPositions);
router.get("/:id_organization_position", getOrganizationPositionDataById);

router.post("/", insertOrganizationPosition);

router.delete("/:id_organization_position", dropOrganizationPosition);
