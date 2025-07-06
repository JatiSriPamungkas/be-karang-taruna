import { Router } from "express";
import { getOrganizationPositions } from "../controller/organization-positions.js";

export const router = Router();

router.get("/", getOrganizationPositions);
