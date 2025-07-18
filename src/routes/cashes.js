import { Router } from "express";
import {
	createNewTransaction,
	deleteTransaction,
	getCashByType,
	getCash,
	updateTransaction,
} from "../controller/cashes.js";

export const router = Router();

router.get("/", getCash);
router.get("/recap/monthly", getCashByType);

router.post("/", createNewTransaction);

router.patch("/", updateTransaction);

router.delete("/", deleteTransaction);
