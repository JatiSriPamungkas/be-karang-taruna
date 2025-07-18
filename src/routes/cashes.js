import { Router } from "express";
import {
	createNewTransaction,
	deleteTransaction,
	getCashByType,
	getCash,
	updateTransaction,
	getCashInMonth,
} from "../controller/cashes.js";

export const router = Router();

router.get("/", getCash);
router.get("/all", getCashByType);
router.get("/recap/monthly", getCashInMonth);

router.post("/", createNewTransaction);

router.patch("/", updateTransaction);

router.delete("/", deleteTransaction);
