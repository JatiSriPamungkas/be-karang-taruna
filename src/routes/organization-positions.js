import { Router } from "express";
import {
  getOrganizationPositions,
  getOrganizationPositionAll,
  insertOrganizationPosition,
  dropOrganizationPosition,
  getOrganizationPositionDataById,
  patchOrganizationPosition,
} from "../controller/organization-positions.js";

export const router = Router();

router.get("/", getOrganizationPositions);
router.get("/all", getOrganizationPositionAll);
router.get("/:id_organization_position", getOrganizationPositionDataById);

router.post("/", insertOrganizationPosition);

router.patch("/", patchOrganizationPosition);

router.delete("/:id_organization_position", dropOrganizationPosition);
