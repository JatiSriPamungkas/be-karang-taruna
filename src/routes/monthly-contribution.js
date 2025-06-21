import { Router } from "express";
import {
	getLatestMonthlyContribution,
	getAllMonthlyContribution,
	createMonthlyContribution,
} from "../controller/monthly-contribution.js";

export const router = Router();

router.get("/", getAllMonthlyContribution);
router.get("/latest", getLatestMonthlyContribution);

router.post("/", createMonthlyContribution);
