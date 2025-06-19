import { Router } from "express";
import {
	getLatestMonthlyContribution,
	getAllMonthlyContribution,
} from "../controller/monthly-contribution.js";

export const router = Router();

router.get("/", getAllMonthlyContribution);

router.get("/latest", getLatestMonthlyContribution);
