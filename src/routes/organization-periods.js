import { Router } from "express";

import { getOrganizationPeriods } from "../controller/organization-periods.js";

export const router = Router();

router.get("/", getOrganizationPeriods);
