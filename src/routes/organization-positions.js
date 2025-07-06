import { Router } from "express";
import {
  getOrganizationPositions,
  insertOrganizationPosition,
  dropOrganizationPosition,
} from "../controller/organization-positions.js";

export const router = Router();

router.get("/", getOrganizationPositions);

router.post("/", insertOrganizationPosition);

router.delete("/:id_organization_position", dropOrganizationPosition);
