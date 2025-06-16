import { Router } from "express";
import {
	getLatestMonthlyContribution,
	getAllMonthlyContribution,
} from "../controller/monthly-contribution";

export const router = Router();

router.get("/", getAllMonthlyContribution);

router.get("/latest", getLatestMonthlyContribution);
