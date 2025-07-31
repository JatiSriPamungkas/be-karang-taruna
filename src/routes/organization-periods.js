import { Router } from "express";

import {
  getOrganizationPeriods,
  submitOrganizationPeriod,
  patchOrganizationPeriod,
  deleteOrganizationPeriod,
} from "../controller/organization-periods.js";

export const router = Router();

router.get("/", getOrganizationPeriods);

router.post("/", submitOrganizationPeriod);

router.patch("/", patchOrganizationPeriod);

router.delete("/:id_organization_period", deleteOrganizationPeriod);
