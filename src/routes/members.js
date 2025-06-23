import { Router } from "express";
import {
	deleteMember,
	getCredentialMember,
	getMember,
	updateMember,
} from "../controller/members.js";
import { createMember } from "../controller/members.js";

export const router = Router();

router.get("/", getMember);
router.get("/credentials", getCredentialMember);

router.post("/", createMember);

router.patch("/", updateMember);

router.delete("/:id_member", deleteMember);
