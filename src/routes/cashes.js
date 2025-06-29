import { Router } from "express";
import {
	createNewTransaction,
	deleteTransaction,
	getCash,
	updateTransaction,
} from "../controller/cashes.js";

export const router = Router();

router.get("/", getCash);

router.post("/", createNewTransaction);

router.patch("/", updateTransaction);

router.delete("/", deleteTransaction);
