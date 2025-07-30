import { Router } from "express";

import {
  getOrganizationPeriods,
  submitOrganizationPeriod,
} from "../controller/organization-periods.js";

export const router = Router();

router.get("/", getOrganizationPeriods);

router.post("/", submitOrganizationPeriod);
