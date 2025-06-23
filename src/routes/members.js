import { Router } from "express";
import { deleteMember, getMember, updateMember } from "../controller/members.js";
import { createMember } from "../controller/members.js";

export const router = Router();

router.get("/", getMember);

router.post("/", createMember);

router.patch("/", updateMember);

router.delete("/:id_member", deleteMember);
